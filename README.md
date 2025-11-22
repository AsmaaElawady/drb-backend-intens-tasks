# Vehicle Management API

A modular NestJS application that includes full authentication (JWT + Refresh Token), authorization with roles, user management, vehicle CRUD operations, global validation, and structured project architecture.

##  Features

### Authentication & Authorization

- Register & Login using email and password
- Access token (JWT) + Refresh token flow
- Hashed refresh tokens stored securely in the database
- Role-based authorization (`Admin`, `User`, `Driver`)
- Guards:
  - `JwtAuthGuard`
  - `RolesGuard`

### User Module

- Create user
- List all users (admin only)
- Roles: `user`, `admin`, `driver`
- Update profile
- Secure password hashing with bcrypt

###  Vehicles Module

- CRUD operations (Create, Read, Update, Delete)
- Ownership relations between users and vehicles
- Permissions:
  - **Admin**: full access
  - **User**: can only access their own vehicles

### Global Features

- DTO validation using `class-validator`
- Global exception filters
- Folder structure following best practices
- Environment-based configuration

##  Installation

###  Clone the repository

```bash
git clone https://github.com/AsmaaElawady/drb-backend-intens-tasks.git
```

### Install dependencies

```bash
npm install
```


## Running the Project

### Development

```bash
npm run start:dev
```


##  Testing Endpoints (Postman)

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`

### Users

- `GET /users` (admin only)
- `GET /users/me`
- `PATCH /users/:id`

### Vehicles

- `POST /vehicles`
- `GET /vehicles`
- `GET /vehicles/:id`
- `PATCH /vehicles/:id`
- `DELETE /vehicles/:id`

##  Roles System

| Role   | Permissions                                        |
|--------|---------------------------------------------------|
| Admin  | Full access to all users + all vehicles          |
| User   | Only own profile + own vehicles                   |
| Driver | Restricted access (depends on implementation)     |
