import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { getProductsFromCache, saveProductsToCache, UNIVERSAL_FEED } from '../services/cache';
import { fetchProductsFromApi } from '../api/productsApi';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>(UNIVERSAL_FEED);
    const [loading, setLoading] = useState<boolean>(true);
    const [isOffline, setIsOffline] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loadProducts = async () => {
        setLoading(true);
        setError(null);

        // 1. First check local persistent device storage (offline-first)
        const cachedData = await getProductsFromCache();
        if (cachedData.length > 0) {
            setProducts(cachedData);
            setLoading(false);
        } else {
            setProducts(UNIVERSAL_FEED);
        }

        // 2. Fetch fresh updates from API
        try {
            const freshData = await fetchProductsFromApi(3);
            if (freshData && freshData.length > 0) {
                setProducts(freshData);
                setIsOffline(false);
                await saveProductsToCache(freshData);
            }
        } catch (err) {
            console.log('Network unavailable. Displaying cached starter feed.');
            setIsOffline(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return {
        products,
        loading,
        isOffline,
        error,
        refresh: loadProducts,
    };
};
