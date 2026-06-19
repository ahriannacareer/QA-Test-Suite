import { test, expect } from '@playwright/test';

test('successful payment creates a booking', async ({ request }) => {

  // Step 1: Create payment 
  const paymentResponse = await request.post(  '/api/payments',  {
      data: {
        customerId: 'CUST-10025',
        facilityId: 'COURT-3',
        amount: 50.00,
        paymentMethod: 'credit_card'
      }
    });

  expect(paymentResponse.ok()).toBeTruthy();

  const contentType = paymentResponse.headers()['content-type'];
  expect(contentType).toContain('application/json');

  const paymentData = await paymentResponse.json();
  expect(paymentData.status).toBe('SUCCESS');
  expect(paymentData.transactionId).toBeDefined();

  const transactionId = paymentData.transactionId;

  // Step 2: Verify booking was generated
  let bookingData;
  
  for (let  attempt = 0; attempt < 10; attempt++) {
  	const bookingResponse = await request.get(`/api/bookings?transactionsId=${transactionId}`);
	if (bookingResponse.ok()) { 
	  const bookingContentType = bookingResponse.headers()['content-type'];
 	
	  expect(bookingContentType).toContain('application/json');
	  bookingData = await bookingResponse.json()
	  
	  // Ensure the booking record contains meaningful information
	  if ( 
	       bookingData &&  bookingData.transactionId &&	
	       bookingData.customerId && bookingData.facilityId  
	  ) { 
	       Break;
	  }
}
await new Promise((resolve) => setTimeOut(resolve, 1000));
    }
    expect(bookingData).toBeDefined();
    expect(bookingData.customerId).toBe('CUST-10025');
    expect(bookingData.facilityId).toBe('COURT-3');
    expect(bookingData.status).toBe('CONFIRMED');
});
