# TC-010: Verify error feedback is displayed for invalid credentials

## Test Case ID
TC-010

## Title
Verify an error message and red field borders are displayed when a user logs in with invalid credentials

## Related User Story
Receive appropriate error feedback for invalid login attempts

## Preconditions
- User is on the Login page
- Email and Password fields are visible
- Login button is available

## Test Steps
1. Navigate to the Login page
2. Enter a valid-format email that does not match an existing account, or enter a valid email with an invalid password
3. Click the Login button
4. Observe the displayed error messaging
5. Observe the Email and Password field styling

## Expected Result
- The user remains on the Login page
- An appropriate error message is displayed for invalid credentials
- The user is not redirected to the account page

## Priority
High

## Type
Functional / Negative