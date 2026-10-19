import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

const CACHE_KEY = '@trendzone_products';

// 1. Data phone ki memory mein save karna
export const saveProductsToCache = async (products: Product[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(products));
    } catch (error) {
        console.error('Error saving cache:', error);
    }
};

// 2. Offline hone par phone ki memory se data nikaalna
export const getProductsFromCache = async (): Promise<Product[]> => {
    try {
        const data = await AsyncStorage.getItem(CACHE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error reading cache:', error);
        return [];
    }
};

// 3. Cache ko saaf karna (Testing ke liye)
export const clearProductsCache = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(CACHE_KEY);
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
};