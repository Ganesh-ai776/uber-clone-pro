# Captain Routes Documentation

## /captains/register Endpoint

### Description

Endpoint to register a new captain. Validates input data and returns a JWT token along with the captain's details upon successful registration.

### Request

- **Method:** POST
- **URL:** `/captains/register`

#### Request Body Parameters

- **fullname:** Object containing:
  - **firstname** (string, required, minimum 3 characters)
  - **lastname** (string, optional, minimum 3 characters if provided)
- **email:** String, required, must be a valid email address.
- **password:** String, required, minimum 6 characters.
- **vehicle:** Object containing:
  - **color:** String, required, minimum 3 characters.
  - **plateNumber:** String, required, minimum 3 characters.
  - **capacity:** Number, required, at least 1.
  - **vehicleType:** String, required, one of "car", "motorcycle", "auto-rickshaw".

### Response

- **Success (201):**
  - **token:** JWT token for the registered captain.
  - **captain:** Object containing captain details.
- **Error (400):**
  - **errors/message:** Validation errors or an error message if the captain already exists.

## /captain/login Endpoint

### Description

Endpoint to authenticate a captain. Validates credentials and returns a JWT token along with the captain's details upon successful authentication.

### Request

- **Method:** POST
- **URL:** `/captain/login`

#### Request Body Parameters

- **email:** String, required, must be a valid email.
- **password:** String, required, minimum 6 characters.

### Response

- **Success (200):**
  - **token:** JWT token.
  - **captain:** Object containing captain details.
- **Error (400/401):**
  - **errors/message:** Validation errors or error message if authentication fails.

## /captain/profile Endpoint

### Description

Endpoint to retrieve the authenticated captain's profile.

### Request

- **Method:** GET
- **URL:** `/captain/profile`
- **Headers:** Must include a valid token via cookies or the Authorization header.

### Response

- **Success (200):**
  - **captain:** Object containing the captain's profile information.
- **Error (401):**
  - **message:** Unauthorized access message.

## /captain/logout Endpoint

### Description

Endpoint to log out the authenticated captain by invalidating the current token.

### Request

- **Method:** GET
- **URL:** `/captain/logout`
- **Headers:** Must include a valid token via cookies or the Authorization header.

### Response

- **Success (200):**
  - **message:** Logout confirmation message.
- **Error (401):**
  - **message:** Unauthorized access message.
