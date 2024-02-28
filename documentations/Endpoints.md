## Project Endpoints Usage

This document provides detailed information about each endpoint available in the project, including their methods, purpose, and usage instructions.

---

### Main Endpoints

#### GET /

- **Description**: This endpoint redirects users to the main page of the application.
- **Usage**: Navigating to the root URL will automatically redirect users to the main page where they can access the main features of the application.

#### GET /main

- **Description**: Renders the main page of the application, showcasing its primary functionalities.
- **Usage**: Accessing this endpoint renders the main page where users can interact with various features and navigate to other sections of the application.

#### GET /converter

- **Description**: Renders the file conversion page where users can upload files for conversion.
- **Usage**: Accessing this endpoint displays a form where users can upload files to be converted into different formats, depending on their requirements.

#### GET /login

- **Description**: Displays the login page for users to authenticate themselves.
- **Usage**: Accessing this endpoint renders the login page where users can enter their credentials to access restricted areas or functionalities of the application.

#### POST /login

- **Description**: Authenticates user credentials and grants access to authenticated users.
- **Usage**: Sending a POST request with valid login credentials allows users to authenticate themselves and gain access to the secured sections of the application.

#### GET /register

- **Description**: Renders the registration page for new users to create an account.
- **Usage**: Accessing this endpoint displays a registration form where new users can sign up for an account by providing necessary details.

#### POST /register

- **Description**: Registers a new user by creating a new account with the provided details.
- **Usage**: Sending a POST request with the required user information creates a new user account in the system, allowing the user to log in and access the application's features.

#### GET /profile

- **Description**: Retrieves and displays the user's profile information.
- **Usage**: Accessing this endpoint fetches the user's profile details and renders them on the profile page, providing personalized information about the user.

#### PUT /change-password

- **Description**: Allows users to change their account password.
- **Usage**: Sending a PUT request with a new password allows users to update their account password, enhancing security and maintaining account integrity.

#### PUT /change-email

- **Description**: Enables users to update their email address associated with their account.
- **Usage**: Sending a PUT request with a new email address allows users to change the email associated with their account, ensuring accurate communication and account management.

#### DELETE /delete-user

- **Description**: Deletes the user's account and associated data from the system.
- **Usage**: Sending a DELETE request removes the user's account and all related information from the system, including profile data and preferences.

#### GET /errors

- **Description**: Renders the error page to display error messages or handle unexpected situations.
- **Usage**: Accessing this endpoint displays an error page where users can be informed about errors or unexpected behavior encountered while using the application.

#### GET /check-auth

- **Description**: Checks the authentication status of the user.
- **Usage**: Accessing this endpoint provides information about the user's authentication status, allowing the application to control access to secured areas or features based on authentication.

---

### WebSocket Endpoints

#### WebSocket Connection

- **Description**: Establishes a WebSocket connection to provide real-time messaging functionality.
- **Usage**: The WebSocket connection sends periodic messages to connected clients, providing instructions or updates in real-time, enhancing user experience and interaction with the application.

---

### Django Endpoints

#### POST /upload/

- **Description**: Handles file uploads and conversion using Django.
- **Usage**: Sending a POST request with a file and desired format triggers the file conversion process, allowing users to convert files seamlessly within the application.

---

This document provides comprehensive details about each endpoint in the project, including their purpose, usage instructions, and functionalities.