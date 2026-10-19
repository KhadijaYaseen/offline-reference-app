import { Product } from '../types/product';

const API_URL = 'https://fakestoreapi.com/products';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProductsFromApi = async (maxRetries = 3): Promise<Product[]> => {
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            attempt++;
            console.log(`API Call Attempt #${attempt}...`);

            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Server Error: ${response.status}`);
            }

            const data: Product[] = await response.json();
            return data;
        } catch (error) {
            console.warn(`Attempt #${attempt} failed:`, error);

            if (attempt >= maxRetries) {
                throw new Error('Internet connection issue. All retries exhausted.');
            }

            // Retry with backoff: 1st retry 1s, 2nd retry 2s
            await wait(attempt * 1000);
        }
    }

    throw new Error('Unable to fetch products');
};