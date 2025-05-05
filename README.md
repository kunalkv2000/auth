# Authentication API

## Setup
1. Clone repository
2. Install dependencies: `npm install`
3. Create `.env` file with your MongoDB URI and JWT secret
4. Start server: `npm run dev`

## API Endpoints
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/users/me - Get current user (protected)


# Postman Documentation:

# Authentication API Documentation

This document describes the API endpoints for user authentication.

## Base URL

`{{base_url}}`

## 1. Register User

Registers a new user.

**URL:** \`POST {{base\_url}}/api/auth/register\`

**Headers:**



\`\`\`

Content-Type: application/json

\`\`\`

**Request Body:**

\`\`\`json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}

\`\`\`

**Responses:**

* **201 Created:** User registered successfully.

    \`\`\`
    {
      "message": "User registered successfully"
    }

    \`\`\`

* **409 Conflict:** User already exists.

    \`\`\`
    {
      "message": "User already exists"
    }

    \`\`\`

* **400 Bad Request:** Validation error.

    \`\`\`
    {
      "message": "Validation failed",
      "errors": ["email must be valid", "password must be at least 6 characters"]
    }

    \`\`\`

## 2. User Login

Authenticates a user and returns a JWT token.

**URL:** \`POST {{base\_url}}/api/auth/login\`

**Headers:**

\`\`\`
Content-Type: application/json
\`\`\`

**Request Body:**

\`\`\`
{
  "email": "test@example.com",
  "password": "password123"
}
\`\`\`

**Responses:**

* **200 OK:** Successful login.

    \`\`\`
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    \`\`\`

* **401 Unauthorized:** Invalid credentials.

    \`\`\`
    {
      "message": "Invalid credentials"
    }
    \`\`\`

## 3. Get Current User (Protected)

Retrieves the authenticated user's information.  Requires a valid JWT token in the `Authorization` header.

**URL:** \`GET {{base\_url}}/api/users/me\`

**Headers:**

\`\`\`
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
\`\`\`

**Responses:**

* **200 OK:** Successful retrieval.

    \`\`\`
    {
      "id": "64c3a5b7e8b1b2a3d4f5g6h7",
      "username": "testuser",
      "email": "test@example.com"
    }
    \`\`\`

* **401 Unauthorized:** Authentication invalid.

    \`\`\`
    {
      "message": "Authentication invalid"
    }
    \`\`\`
