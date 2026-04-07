# TC-015: Verify applying a filter does not reset the selected sort option

## Test Case ID
TC-015

## Title
Verify the selected sort option remains applied after a filter is selected on the Product Listing Page

## Related Defect
Applying filter resets selected sort option on PLP

## Related User Story
As a user, I want to sort product listings by price so that I can find products within my budget or compare items based on cost.

## Preconditions
- User is on the Product Listing Page
- Products are available across multiple filters
- Sort By dropdown is visible and functional

## Test Data
- Sort Option: Price: Low to High
- Filter: Any available category, brand, or price range filter

## Test Steps
1. Navigate to the Product Listing Page
2. Select **Price: Low to High** from the **Sort By** dropdown
3. Confirm the products are displayed in ascending price order
4. Apply any available filter on the Product Listing Page
5. Observe the **Sort By** dropdown
6. Observe the product order after the filter is applied

## Expected Result
- The previously selected sort option remains visible in the **Sort By** dropdown
- The selected sort option remains applied after the filter is selected
- Filtered products continue to display in the expected sorted order
- Product ordering remains consistent with the selected sort criteria

## Actual Result
- The selected sort option is reset after applying a filter
- The **Sort By** dropdown no longer reflects the previously selected option
- Product order changes unexpectedly

## Priority
High

## Severity
Major

## Type
Functional / Regression / UI State