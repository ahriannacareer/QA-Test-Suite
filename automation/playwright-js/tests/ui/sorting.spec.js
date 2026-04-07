import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SORT_OPTIONS, SORT_RULES } from '../../constants/plpactions';
import { pageURLS } from '../../constants/urls';
import { sortValues } from '../../utils/sortHelpers'; 

test('Sort by CO2 Rating', async ({ browser  }) => {
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    const homePage = new HomePage(page);

    await homePage.goto(pageURLS.homepage.url);
    
    
    const selectedSort = SORT_OPTIONS.CO2_A_E
    await homePage.sortPLP(selectedSort.value)


    await homePage.waitForSortComplete();

    await expect(homePage.sortDropdown).toHaveValue(selectedSort.value);
    await expect(homePage.sortDropdown).toContainText(selectedSort.label);

    const allRatings = await homePage.verifyCo2RatingsAcrossPages(SORT_RULES.ascending);
    
    for (const { ratings } of allRatings) {
        const expectedRatings = sortValues(ratings, SORT_RULES.ascending);
        expect(ratings).toEqual(expectedRatings);
    }

});

test('Sort by Price', async ({ browser  }) => {
   
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    const homePage = new HomePage(page);

    await homePage.goto(pageURLS.homepage.url);
    
    
    const selectedSort = SORT_OPTIONS.PRICE_LOW_HIGH 
    await homePage.sortPLP(selectedSort.value) 

    await homePage.waitForSortComplete();

    await expect(homePage.sortDropdown).toHaveValue(selectedSort.value);
    await expect(homePage.sortDropdown).toContainText(selectedSort.label);

    
    const allPrices = await homePage.verifySortByPrice(SORT_RULES.ascending);
    
    for (const { prices } of allPrices) {
        const expectedPrices = sortValues(prices, SORT_RULES.ascending, 'number');
        expect(prices).toEqual(expectedPrices);
    }

});