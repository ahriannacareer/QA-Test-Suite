# TC-004: Verify price sorting persists across pagination

## Test Case ID
TC-004

## Title
Verify selected price sorting remains applied when navigating between product listing pages

## Related User Story
Sort product listings by price

## Preconditions
- User is on the Product Listing Page (PLP)
- Multiple pagination pages are available
- Sort By dropdown is available

## Test Steps
1. Navigate to the Product Listing Page
2. Select **Price: Low to High** from the **Sort By** dropdown
3. Confirm products on the current page are sorted in ascending price order
4. Navigate to the next pagination page
5. Observe the selected sort option in the dropdown
6. Observe the order of products on the new page
7. Repeat steps 2–6 using **Price: High to Low**

## Expected Result
- The selected sort option remains visible in the dropdown after moving to another pagination page
- Products on the next page remain sorted according to the selected price sort option
- Sorting does not reset when navigating between pages

## Priority
High

## Type
Functional / Regression