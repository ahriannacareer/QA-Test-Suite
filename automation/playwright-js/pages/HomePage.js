import { sortValues } from "../utils/sortHelpers";

export class HomePage {
    constructor(page) {
        this.page = page;

        // ----- Sort Locators -----
        this.sortDropdown = page.locator('[data-test="sort"]')
        this.searchInput = page.locator("#search-query");
        this.searchClear = page.locator('[data-test="search-reset"]');
        this.searchSubmitButton = page.locator('[data-test="search-submit"]');

        // Product Locators
        this.productCards = page.locator('a.card[data-test^="product-"]');
        this.productPrices = page.locator('[data-test="product-price"]');

        this.sortCompletion = page.locator('[data-test="sorting_completed"]');
        
        this.paginationNav = page.locator('.pagination');
        this.paginationButtons = page.locator('.page-link');
        this.activePageButton = page.locator('.pagination .active');
    }

    async goto(url) {
        await this.page.goto(url)
    }
    async waitForSortComplete() {
        await this.sortCompletion.waitFor({ state: 'visible' });
    }

    // ----- PLP Sort Actions -----
    async sortPLP(sortValue) {
        await this.sortDropdown.selectOption(sortValue)
    }

    async search(searchTerm) {
        await this.searchInput.fill(searchTerm);
        await this.searchSubmitButton.click();
    }

    async clearSearch(searchTerm) {
        await this.searchInput.fill(searchTerm);
        await this.searchClear.click();
    }

    // ----- Get Ratings -----
    async getProductRating() {
        const count = await this.productCards.count();
        const ratings = [];

        for (let i = 0; i < count; i++) {
            const rating = await this.productCards
            .nth(i)
            .locator('.co2-rating-scale .active')
            .textContent();

            ratings.push(rating.trim());
        }

        return ratings;
        }
    // ----- Get Pricing -----
    async getProductPricing() {
        const count = await this.productPrices.count();
        
        const prices = []

        for (let i = 0; i < count; i++) {
            const price = this.productPrices.nth(i);
            const currentPrice = await price.textContent();
            const cleanPrice = Number(currentPrice.replace('$', '').trim());
            prices.push(cleanPrice);
        }
        return prices;
    }
    
    // ----- Navigate Pagination -----
    async navigatePagination() {
        const pages = this.paginationButtons.count();
        const viewedPages = []

        for (let p = 0; p < pages; p++) {
            const bttn = this.paginationButtons.nth(p);
            const hasClass = await bttn.evaluate(el => el.classList.contains('active'));
            if (hasClass) {

            }
            else {

            }
        }
    }
    
    // ----- Verify Sorting -----
    async verifyCo2RatingsAcrossPages(order = 'desc') {
        const pages = await this.paginationButtons.count();
        const allPageRatings = [];
        await this.page.waitForTimeout(2000);

        for (let p = 1; p < pages-1; p++) {
            const bttn = this.paginationButtons.nth(p);
            const hasClass = await bttn.evaluate(el => el.classList.contains('active'));

            if (!hasClass) {
                await bttn.click();
                await this.page.waitForLoadState('networkidle');
                
                await this.sortCompletion.waitFor({ state: 'visible' });
            }

            const ratingsActual = await this.getProductRating();
            const ratingsExpected = sortValues(ratingsActual, order);
            

            if (JSON.stringify(ratingsActual) !== JSON.stringify(ratingsExpected)) {
                throw new Error(
                    `CO2 ratings are not sorted correctly on page ${p + 1}.
                    Actual: ${ratingsActual.join(', ')}
                    Expected: ${ratingsExpected.join(', ')}`
                );
            }

            allPageRatings.push({
                page: p + 1,
                ratings: ratingsActual,
            });
        }
        
        return allPageRatings;
    }

    async verifySortByPrice(order = 'desc') {
        const pages = await this.paginationButtons.count();
        const allPagePrices = [];
        await this.page.waitForTimeout(2000);

        for (let p = 1; p < pages-1; p++) {
            const bttn = this.paginationButtons.nth(p);
            const hasClass = await bttn.evaluate(el => el.classList.contains('active'));

            if (!hasClass) {
                await bttn.click();
                await this.page.waitForTimeout(3000); 
                
                
                await this.sortCompletion.waitFor({ state: 'visible' });
            }

            const pricesActual = await this.getProductPricing();
            const pricesExpected = sortValues(pricesActual, order, 'number');
            

            if (JSON.stringify(pricesActual) !== JSON.stringify(pricesExpected)) {
                throw new Error(
                    `Prices are not sorted correctly on page ${p + 1}.
                    Actual: ${pricesActual.join(', ')}
                    Expected: ${pricesExpected.join(', ')}`
                );
            }

            allPagePrices.push({
                page: p + 1,
                prices: pricesActual,
            });
        }
        
        return allPagePrices;
    }
    
}