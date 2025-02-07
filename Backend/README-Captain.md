# Captain Routes Documentation

## /captain/register Endpoint

### Description

Endpoint to register a new captain. Validates input data and returns a JWT token along with the captain's details upon successful registration.

### Request

- **Method:** POST
- **URL:** `/captain/register`

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
