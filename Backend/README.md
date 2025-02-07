# /users/register Endpoint Documentation

## Description
Endpoint to register a new user. Validates the request data and returns a token along with the user information upon successful registration.

## Request
- **Method:** POST
- **URL:** `/users/register`

### Request Body Parameters
- **fullname:** Object containing:
  - **firstname** (string, required, minimum 3 characters)
  - **lastname** (string, optional, minimum 3 characters if provided)
- **email:** String, required, must be a valid email address.
- **password:** String, required, minimum 6 characters.

## Response
- **Success (200):**
  - **token:** JWT token for the registered user.
  - **user:** Object containing user details.
- **Error (400):**
  - **errors:** Array of validation error messages when input data does not meet the requirements.

<!-- ...existing documentation if any... -->
