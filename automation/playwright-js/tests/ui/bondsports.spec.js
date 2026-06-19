import { test, expect } from '@playwright/test';

test('successful payment creates a booking', async ({ request }) => {
  // Assumptions:
  // 1. baseURL is configured in playwright.config.ts
  // 2. Authentication is configured globally
  // 3. Test customer and facility already exist
  // 4. Payment API returns a transactionId
  // 5. Booking API supports lookup by transactionId

  const paymentResponse = await request.post('/api/payments', {
    data: {
      customerId: 'CUST-10025',
      facilityId: 'COURT-3',
      amount: 50.0,
      paymentMethod: 'credit_card',
    },
  });

  expect(paymentResponse.ok()).toBeTruthy();

  const contentType = paymentResponse.headers()['content-type'];
  expect(contentType).toContain('application/json');

  const paymentData = await paymentResponse.json();

  expect(paymentData.status).toBe('SUCCESS');
  expect(paymentData.transactionId).toBeDefined();

  const transactionId = paymentData.transactionId;

  let bookingData;

  for (let attempt = 0; attempt < 10; attempt++) {
    const bookingResponse = await request.get(
      `/api/bookings?transactionId=${transactionId}`
    );

    if (bookingResponse.ok()) {
      const bookingContentType =
        bookingResponse.headers()['content-type'];

      expect(bookingContentType).toContain('application/json');

      bookingData = await bookingResponse.json();

      // Ensure a meaningful booking record exists
      if (
        bookingData &&
        bookingData.transactionId &&
        bookingData.customerId &&
        bookingData.facilityId
      ) {
        break;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  expect(bookingData).toBeDefined();

  expect(bookingData.transactionId).toBe(transactionId);
  expect(bookingData.customerId).toBe('CUST-10025');
  expect(bookingData.facilityId).toBe('COURT-3');
  expect(bookingData.status).toBe('CONFIRMED');
});