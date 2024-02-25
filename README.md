## File Type Converter Application

This document provides a comprehensive guide to the features, endpoints, technologies used, and directory structure of the File Type Converter application.

### Features:

1. **User Registration**:
   - Endpoint: `POST /register`
   - Description: Allows users to register for an account by providing their name, email, and password.

2. **User Login**:
   - Endpoint: `POST /login`
   - Description: Enables registered users to log in to their accounts using their email and password credentials.

3. **File Conversion**:
   - Endpoint: `GET /converter`
   - Description: Renders a page where users can upload files and convert them to different file types.

4. **User Profile**:
   - Endpoint: `GET /profile`
   - Description: Retrieves the user's profile information, including their name, email, and password.

5. **Change Password**:
   - Endpoint: `PUT /change-password`
   - Description: Allows users to update their password.

6. **Change Email**:
   - Endpoint: `PUT /change-email`
   - Description: Enables users to update their email address.

7. **User Deletion**:
   - Endpoint: `DELETE /delete-user`
   - Description: Allows users to delete their accounts, removing all associated information from the system.

8. **Check Authentication**:
   - Endpoint: `GET /check-auth`
   - Description: Checks if the user is authenticated and returns the authentication status.

### Technologies Used:

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Session Management**: express-session
- **Password Encryption**: bcrypt
- **File Conversion**: (Add the library or tool you are using for file conversion)

### Getting Started:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install Dependencies:**
    ```bash
    npm install
    ```
3. **Set Up MongoDB Atlas:**
  - Create a MongoDB Atlas account.
  - Obtain the connection URI.
  - Add the connection URI as MONGODB_URI in a .env file in the root directory.

4. **Run the Application:**
   ```bash
   node app.js
   ```

5. **Access the Application:**
  Open your browser and navigate to http://localhost:3000

### Directory Structure:
**handlers:** Contains handler functions for various routes. <br>
**public:** Contains static files like CSS and client-side JavaScript. <br>
**public/scripts:** Contains client-side JavaScript files for user interaction. <br>
**views:** Contains Pug templates for rendering HTML pages. <br>
**config:** Contains configuration files. <br>
**models:** Contains Mongoose models for interacting with the database. <br>
