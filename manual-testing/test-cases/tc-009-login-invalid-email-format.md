# TC-009: Verify error feedback is displayed for an invalid email format

## Test Case ID
TC-009

## Title
Verify an error message and red field border are displayed when a user enters an invalid email format

## Related User Story
Receive appropriate error feedback for invalid login attempts

## Preconditions
- User is on the Login page
- Email and Password fields are visible
- Login button is available

## Test Steps
1. Navigate to the Login page
2. Enter an invalid email format in the Email field
3. Enter any value in the Password field
4. Click the Login button
5. Observe the Email field and any validation message displayed

## Expected Result
- The user remains on the Login page
- An error message is displayed for the invalid email
- The Email field displays a red border to indicate an error
- The user is not redirected to the account page

## Priority
High

## Type
Validation / Negative