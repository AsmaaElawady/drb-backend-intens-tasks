# DRB Backend Internship Tasks

Welcome to the DRB Backend Internship program! This repository contains weekly tasks designed to enhance your backend development skills.

## How to Get Started

1. **Fork this repository** to your GitHub account
2. **Clone your forked repository** to your local machine
3. **Create a branch** named `week-X` (where X is the week number)
4. **Complete the task** on your branch
5. **Push your changes** to your forked repository
6. **Create a Pull Request** back to the main repository when ready for review

---

## Week 1: Authentication Module (Nov 11 - Nov 14, 2025)

### Task Overview

Build a complete authentication system using **NestJS**, **TypeScript**, and **MongoDB** with **JWT-based authentication**.

### Technical Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

### Required Features

#### 1. User Registration

- **Endpoint**: `POST /auth/register`
- **Required Fields**:
  - Email (must be unique and valid)
  - Password (minimum 8 characters, with validation)
  - Name
  - Optional: Phone number, role
- **Validations**:
  - Email format validation
  - Password strength requirements
  - Check for existing user
- **Response**: User object (without password) + Access token

#### 2. User Login

- **Endpoint**: `POST /auth/login`
- **Required Fields**:
  - Email
  - Password
- **Validations**:
  - Verify credentials
  - Check if user exists
- **Response**: Access token + Refresh token

#### 3. Get Current User Profile

- **Endpoint**: `GET /auth/profile`
- **Authentication**: Required (JWT)
- **Response**: Current user's profile information

#### 4. Update Profile

- **Endpoint**: `PATCH /auth/profile`
- **Authentication**: Required (JWT)
- **Allowed Updates**:
  - Name
  - Phone number
  - Other non-sensitive fields
- **Response**: Updated user object

#### 5. Change Password

- **Endpoint**: `PATCH /auth/change-password`
- **Authentication**: Required (JWT)
- **Required Fields**:
  - Current password
  - New password
- **Validations**:
  - Verify current password
  - Validate new password strength
- **Response**: Success message

#### 6. Refresh Token

- **Endpoint**: `POST /auth/refresh`
- **Required Fields**:
  - Refresh token
- **Response**: New access token

#### 7. Logout

- **Endpoint**: `POST /auth/logout`
- **Authentication**: Required (JWT)
- **Response**: Success message

### Additional Requirements

#### Security Features

- ✅ Password hashing using bcrypt
- ✅ JWT token generation and validation
- ✅ Refresh token mechanism
- ✅ Protected routes using Guards
- ✅ Input validation and sanitization
- ✅ Error handling and appropriate status codes

#### Code Quality

- ✅ Follow NestJS best practices
- ✅ Proper project structure (modules, controllers, services)
- ✅ Use DTOs (Data Transfer Objects) for validation
- ✅ Use Decorators for route protection
- ✅ Environment variables for sensitive data (.env file)
- ✅ Clean and readable code with comments

#### Database Schema

- User model should include:
  - `_id` (MongoDB ObjectId)
  - `email` (unique, required)
  - `password` (hashed, required)
  - `name` (required)
  - `phone` (optional)
  - `role` (default: 'user')
  - `refreshToken` (optional, for refresh mechanism)
  - `createdAt` (timestamp)
  - `updatedAt` (timestamp)

### Deliverables

1. **Complete NestJS Project**

   - All endpoints implemented and working
   - Proper folder structure
   - Configuration files (package.json, tsconfig.json, etc.)

2. **Documentation**

   - README with setup instructions
   - **Swagger API documentation** integrated into the project
   - Environment variables documentation

### Evaluation Criteria

- ✅ All endpoints working correctly
- ✅ Proper error handling
- ✅ Security best practices implemented
- ✅ Code organization and structure
- ✅ Validation and data sanitization
- ✅ Documentation quality
- ✅ Git commit history (meaningful commits)

### Submission

1. Push all your code to the `week-1` branch in your forked repository
2. Create a Pull Request to the main repository
3. Include a detailed README with setup instructions
4. Add any additional notes or challenges faced in the PR description

**Deadline**: November 14, 2025

---

## Questions?

If you have any questions or need clarification, please reach out to me on WhatsApp.

Good luck! 🚀
