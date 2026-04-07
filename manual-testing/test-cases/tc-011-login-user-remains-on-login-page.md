# TC-011: Verify user is not redirected after failed login attempt

## Test Case ID
TC-011

## Title
Verify the user remains on the Login page after attempting to log in with invalid credentials

## Related User Story
Receive appropriate error feedback for invalid login attempts

## Preconditions
- User is on the Login page
- Email and Password fields are visible
- Login button is available

## Test Steps
1. Navigate to the Login page
2. Enter invalid login credentials
3. Click the Login button
4. Observe the resulting page

## Expected Result
- The user remains on the Login page
- The account page is not displayed
- Authentication is not successful
- Appropriate error feedback is shown to the user

## Priority
High

## Type
Functional / Negative