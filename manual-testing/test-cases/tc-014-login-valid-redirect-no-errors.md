# TC-014: Verify user is redirected to account page and no error messages are shown after valid login

## Test Case ID
TC-014

## Title
Verify successful login redirects the user to the account page and does not display error messages

## Related User Story
Log into account using valid credentials

## Preconditions
- User is on the Login page
- A registered user account with valid credentials exists
- Email and Password fields are visible
- Login button is available

## Test Steps
1. Navigate to the Login page
2. Enter a valid email address
3. Enter the correct password
4. Click the Login button
5. Observe the resulting page
6. Check for any visible validation or authentication error messages

## Expected Result
- The user is redirected to the account page after successful login
- No invalid email, invalid password, or invalid credentials error messages are displayed
- Email and Password fields do not display error styling for a successful login

## Priority
High

## Type
Functional / UI