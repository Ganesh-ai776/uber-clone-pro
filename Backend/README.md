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

## /users/login Endpoint

### Description

Endpoint to authenticate an existing user. Validates credentials and returns a token along with user details upon successful authentication.

### Request

- **Method:** POST
- **URL:** `/users/login`

#### Request Body Parameters

- **email:** String, required, must be a valid email address.
- **password:** String, required, minimum 6 characters.

### Response

- **Success (200):**
  - **token:** JWT token for the user.
  - **user:** Object containing user details.
- **Error (400):**
  - **errors:** Array of validation error messages if input validation fails.
- **Error (401):**
  - **message:** "Invalid email or password" if authentication fails.

## /users/profile Endpoint Documentation

### Description

Endpoint to retrieve the authenticated user's profile details.

### Request

- **Method:** GET
- **URL:** `/users/profile`
- **Headers:** Must include a valid token in cookies or the Authorization header.

### Response

- **Success (200):**
  - Returns the user object with profile details.
- **Error (401):**
  - Returns an error message if the token is missing or invalid.

## /users/logout Endpoint Documentation

### Description

Endpoint to log out the authenticated user by invalidating the current token.

### Request

- **Method:** GET
- **URL:** `/users/logout`
- **Headers:** Must include a valid token in cookies or the Authorization header.

### Response

- **Success (200):**
  - Returns a message confirming successful logout.
- **Error (401):**
  - Returns an error message if the token is missing or invalid.
