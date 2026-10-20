import AsyncStorage from '@react-native-async-storage/async-storage';
import { FeedItem } from '../types/product';

const CACHE_KEY = '@universal_starter_feed_v2';

export const UNIVERSAL_FEED: FeedItem[] = [
    {
        id: 1,
        title: 'Offline Resilient Cache Active',
        category: 'Architecture',
        description: 'Persistent local storage ensures your application is instantly usable without an active internet connection.',
        date: 'Today',
        readTime: '2 min read',
        icon: 'cloud-offline-outline',
        author: 'Core Engineering',
    },
    {
        id: 2,
        title: 'Universal Bottom Navigation Live',
        category: 'Navigation',
        description: '4 pre-configured tabs: Home feed, Explore search, Notifications activity, and Profile settings.',
        date: 'Yesterday',
        readTime: '3 min read',
        icon: 'navigate-outline',
        author: 'Design System',
    },
    {
        id: 3,
        title: 'Exponential Backoff Retry Engine',
        category: 'Networking',
        description: 'Automatic retry logic handles intermittent packet drops and slow mobile network transitions smoothly.',
        date: 'Oct 20, 2026',
        readTime: '4 min read',
        icon: 'refresh-outline',
        author: 'Network Team',
    },
    {
        id: 4,
        title: 'Production Auth Flow Boilerplate',
        category: 'Security',
        description: 'Onboarding walkthrough, form validation, password visibility toggle, and guest session handling.',
        date: 'Oct 19, 2026',
        readTime: '3 min read',
        icon: 'shield-checkmark-outline',
        author: 'Security Lead',
    },
    {
        id: 5,
        title: 'Automated CI & Unit Test Suite',
        category: 'Quality',
        description: 'Pre-configured Jest unit tests and GitHub Actions CI workflow keep every commit green and stable.',
        date: 'Oct 18, 2026',
        readTime: '5 min read',
        icon: 'checkmark-done-circle-outline',
        author: 'DevOps Team',
    },
];

export const saveProductsToCache = async (products: FeedItem[]): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(products);
        await AsyncStorage.setItem(CACHE_KEY, jsonValue);
    } catch (e) {
        console.error('Failed to save to local cache:', e);
    }
};

export const getProductsFromCache = async (): Promise<FeedItem[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(CACHE_KEY);
        if (jsonValue != null) {
            return JSON.parse(jsonValue);
        }
        return [];
    } catch (e) {
        console.error('Failed to retrieve from local cache:', e);
        return [];
    }
};
