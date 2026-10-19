import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { getProductsFromCache, saveProductsToCache } from '../services/cache';
import { fetchProductsFromApi } from '../api/productsApi';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isOffline, setIsOffline] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loadProducts = async () => {
        setLoading(true);
        setError(null);

        // 1. Pehle phone ki memory (cache) se data uthao
        const cachedData = await getProductsFromCache();
        if (cachedData.length > 0) {
            setProducts(cachedData);
            setLoading(false); // User ko foran purana data dikh gaya!
        }

        // 2. Ab internet (API) se taaza data mangwao
        try {
            const freshData = await fetchProductsFromApi(3);
            setProducts(freshData);
            setIsOffline(false);
            // Naya data phone mein save kar do
            await saveProductsToCache(freshData);
        } catch (err) {
            console.log('Network unavailable. Displaying cached products.');
            setIsOffline(true);

            // Agar cache mein bhi kuch na tha aur net bhi fail ho gaya
            if (cachedData.length === 0) {
                setError('No internet and no cached data available.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Jab app pehli baar khulay to loadProducts chalao
    useEffect(() => {
        loadProducts();
    }, []);

    return {
        products,
        loading,
        isOffline,
        error,
        refresh: loadProducts, // Try Again ya Pull-to-refresh ke liye
    };
};