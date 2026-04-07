import { test, expect } from '@playwright/test';
import { apiURLS } from '../../constants/urls';
import { apiProducts } from '../../constants/products';


test.describe('Products API', () => {
  test('Get all products returns a product list', async ({ request }) => {
    const response = await request.get(`${apiURLS.products.url}`);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toBeTruthy();

    const products = Array.isArray(body) ? body : body.data || body.products || [];

    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);

    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
  });

  test('Get a single product by id returns product details', async ({ request }) => {
    const response = await request.get(apiURLS.products.url);
    expect(response.status()).toBe(200);

    const body = await response.json();
    const products = Array.isArray(body) ? body : body.data || body.products || [];


    const item = products.find(product =>
      product.name === 'Claw Hammer'
    );

    expect(item).toBeTruthy();


    const detailResponse = await request.get(`${apiURLS.products.url}/${item.id}`);
    expect(detailResponse.status()).toBe(200);

    const product = await detailResponse.json();

    expect(product.id).toBe(item.id);

    expect(product).toBeTruthy();
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
  });

  test('Search products returns matching results', async ({ request }) => {
    const searchTerm = 'hammer';

    const response = await request.get(`${apiURLS.products.url}/search?q=${searchTerm}`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    const products = Array.isArray(body) ? body : body.data || body.products || [];

    expect(Array.isArray(products)).toBe(true);

    expect(products.length).toBeGreaterThan(0);

    const hasMatch = products.some(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    expect(hasMatch).toBe(true);
  });

  test('Requesting an invalid product id returns an error response', async ({ request }) => {
    const response = await request.get(`${apiURLS.products.url}/products/999999`);

    expect([404, 400]).toContain(response.status());
  });
});