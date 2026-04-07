# TC-012: Verify session state persists after page refresh

## Test Case ID
TC-012

## Title
Verify the user session state persists after refreshing the page

## Related User Story
Receive appropriate error feedback for invalid login attempts

## Preconditions
- User is on the Login page
- Test account credentials are available for a valid login scenario

## Test Steps
1. Navigate to the Login page
2. Enter valid login credentials
3. Click the Login button
4. Confirm the user is successfully logged in
5. Refresh the page
6. Observe whether the session remains active

## Expected Result
- The user remains authenticated after refreshing the page
- The session persists after page refresh
- The user is not unexpectedly logged out or redirected back to the Login page

## Priority
Medium

## Type
Functional / Session