import { fetchProductsFromApi } from '../src/api/productsApi';

describe('Products API & Retry Resilience', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully return products when API call succeeds', async () => {
    const mockProducts = [
      { id: 1, title: 'Test Product', price: 29.99, description: 'Test', category: 'Jewelry', image: '', rating: { rate: 5, count: 10 } }
    ];

    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockProducts,
    }) as any;

    const result = await fetchProductsFromApi(2);
    expect(result).toEqual(mockProducts);
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });

  it('should retry when fetch fails and recover on next attempt', async () => {
    const mockProducts = [{ id: 2, title: 'Recovered Product', price: 19.99 }];

    globalThis.fetch = jest
      .fn()
      .mockRejectedValueOnce(new Error('Network drop'))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      }) as any;

    const result = await fetchProductsFromApi(3);
    expect(result).toEqual(mockProducts);
    expect(globalThis.fetch).toHaveBeenCalledTimes(2);
  });
});
