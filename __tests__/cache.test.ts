import { getProductsFromCache, saveProductsToCache } from '../src/services/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../src/types/product';

describe('Offline Cache Service', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
  });

  it('should save and retrieve products from local storage', async () => {
    const dummyProducts: Product[] = [
      {
        id: 1,
        title: 'Mens Cotton Slim-Fit Jacket',
        price: 55.99,
        description: 'Great outerwear jacket',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 },
      },
    ];

    await saveProductsToCache(dummyProducts);
    const cached = await getProductsFromCache();

    expect(cached).toEqual(dummyProducts);
  });

  it('should return an empty array if cache is empty', async () => {
    const cached = await getProductsFromCache();
    expect(cached).toEqual([]);
  });
});
