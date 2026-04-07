# TC-008: Verify CO2 sorting persists across selection and pagination

## Test Case ID
TC-008

## Title
Verify selected CO2 sorting remains visible and applied when navigating between product listing pages

## Related User Story
Sort product listings by CO2 rating

## Preconditions
- User is on the Product Listing Page (PLP)
- Multiple pagination pages are available
- Sort By dropdown is available

## Test Steps
1. Navigate to the Product Listing Page
2. Select **CO2: Low to High** from the **Sort By** dropdown
3. Confirm the selected sort option remains visible in the dropdown
4. Confirm products on the current page are sorted in ascending CO2 order
5. Navigate to the next pagination page
6. Observe the selected sort option in the dropdown
7. Observe the order of products on the new page
8. Repeat the test using **CO2: High to Low**

## Expected Result
- The selected CO2 sort option remains visible in the dropdown after selection
- The selected CO2 sort option remains applied after navigating to another pagination page
- Products continue to display in the correct CO2 order on subsequent pages
- Sorting does not reset when moving between pages

## Priority
High

## Type
Functional / Regression