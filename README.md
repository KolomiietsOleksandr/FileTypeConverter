# File Converter Web Application Documentation

Welcome to the documentation for the File Converter Web Application. This comprehensive guide will help you understand the structure of the application, set it up, and use its features effectively.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Cloning the Repository](#1-cloning-the-repository)
   - [Installing Dependencies](#2-installing-dependencies)
   - [Setting Up MongoDB](#3-setting-up-mongodb)
   - [Setting Up Django Server](#4-setting-up-django-server)
   - [Running the Application](#5-running-the-application)
   - [Accessing the Application](#6-accessing-the-application)
3. [Application Structure](#application-structure)
   - [Main Files](#main-files)
   - [Public Scripts](#public-scripts)
   - [Views](#views)
   - [Models](#models)
   - [Django Backend](#django-backend)
4. [Additional Notes](#additional-notes)
   - [Session Management](#session-management)
   - [WebSocket Notifications](#websocket-notifications)
   - [File Conversion](#file-conversion)
   - [Error Handling](#error-handling)
5. [API Endpoints](#api-endpoints)
6. [WebSocket Notifications](#websocket-notifications-1)
7. [Notes](#notes)
   - [Supported File Types](#supported-file-types)
   - [File Size Limit](#file-size-limit)
8. [Conclusion](#conclusion)
9. [Contact](#contact)

---

## Introduction

The File Converter Web Application offers a user-friendly platform to upload files and convert them to various supported formats, including images (JPEG, PNG, GIF, BMP) and audio (WAV, MP3). Leveraging Node.js, Express, and MongoDB for backend operations and Django for file conversion, this application provides a seamless conversion experience.

---

## Getting Started

### 1. Cloning the Repository

To begin, clone the repository to your local machine using the following command:

```bash
git clone <https://github.com/KolomiietsOleksandr/FileTypeConverter>
cd <FileTypeConverter>
```

### 2. Installing Dependencies

Once the repository is cloned, install the necessary dependencies by running:

```bash
npm install express morgan body-parser express-session http fs path mongoose websocket cors
```

These dependencies include:

- `express`: Web framework for Node.js.
- `morgan`: HTTP request logger middleware.
- `body-parser`: Middleware to parse incoming request bodies.
- `express-session`: Simple session middleware for Express.
- `http`: HTTP server module.
- `fs`: File system module.
- `path`: Module for working with file and directory paths.
- `mongoose`: MongoDB object modeling tool.
- `websocket`: WebSocket library for Node.js.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.


### 3. Setting Up MongoDB

Before running the application, ensure MongoDB is installed and running on your system. Update the MongoDB connection string in `db.js` if required to connect to your MongoDB instance.

### 4. Setting Up Django Server

Navigate to the `django_server` directory and follow these steps:

- Install Django and required Python libraries:
  ```bash
  pip install django pillow pydub moviepy
  ```
- Perform Django migrations:
  ```bash
  python manage.py migrate
  ```
- Start the Django server:
  ```bash
  python manage.py runserver
  ```

### 5. Running the Application

To run the application, execute the following command:

```bash
node app.js
```

### 6. Accessing the Application

Once the application is running, access it by opening a web browser and navigating to `http://localhost:3000`.

---

## Application Structure

### Main Files

- **app.js:** This file serves as the main entry point of the application, initializing the Express server and configuring middleware.
- **db.js:** It handles MongoDB configuration and connection settings.

### Public Scripts

- **headerButtons.js:** Manages interactions related to header buttons on the client-side.
- **changeData.js:** Handles user data modification operations on the client-side.
- **fileHandler.js:** Manages file upload and conversion processes on the client-side.

### Views

- **views/:** Contains HTML template files structured with the Pug templating engine for rendering user interfaces.

### Models

- **models/userModel.js:** Defines the schema for user data using Mongoose, enabling storage of user information in MongoDB.

### Django Backend

- **views.py:** Contains views responsible for handling file upload and conversion tasks within the Django backend.

---

## Additional Notes

### Session Management

User sessions are effectively managed using the `express-session` middleware, ensuring user authentication persistence across requests. This session management mechanism guarantees a seamless and secure user experience throughout interactions with the application.

### WebSocket Notifications

The application employs WebSocket technology to send periodic notifications to clients, providing guidance and updates regarding the conversion process. These notifications play a crucial role in enhancing user experience by offering real-time information and instructions.

### File Conversion

File conversion functionality is facilitated by a Django backend, utilizing Python libraries such as PIL (Python Imaging Library), pydub, and moviepy. These libraries enable efficient and accurate conversion of files to various formats, ensuring compatibility and usability across different file types.

### Error Handling

The application incorporates robust error handling mechanisms to gracefully manage errors and exceptions. In case of an error during user interactions, users are redirected to an error page, ensuring they are informed about any issues encountered and facilitating a seamless user experience.

---

## API Endpoints

The File Converter Web Application exposes several API endpoints for user authentication, file management, and profile manipulation:

- `/login`: Handles user login authentication.
- `/register`: Manages user registration processes.
- `/profile`: Retrieves user profile information.
- `/change-password`: Allows users to update their password.
- `/change-email`: Facilitates email address modification for users.
- `/delete-user`: Enables users to delete their account.
- `/check-auth`: Verifies user authentication status.

These endpoints empower users to perform various actions within the application, facilitating account management and file processing tasks.

---

## WebSocket Notifications

WebSocket notifications serve as real-time communication

 channels, delivering updates and instructions to clients during the file conversion process. By leveraging WebSocket technology, the application enhances user engagement and interaction by providing timely and relevant information.

---

## Notes

### Supported File Types

The application supports conversion of multiple file types, including images (JPEG, PNG, GIF, BMP) and audio (WAV, MP3). Users can upload files in these formats and convert them to other supported formats as needed.

### File Size Limit

For efficient processing and resource utilization, files larger than 10MB require user authentication before initiating the conversion process. This file size limit ensures optimal performance and prevents abuse of the conversion feature.

---

## Usage

1. Click on the corresponding buttons to go to the file converter itself.
![1](https://media.discordapp.net/attachments/856234593153056781/1212757643324817408/2024-02-29_15.34.37.png?ex=65f2ff92&is=65e08a92&hm=864a2f51fa1fe280945ec9804c6f7e25c88293fb417742ffeeaf22fce0ca9dbf&=&format=webp&quality=lossless&width=2092&height=1304)

2. If your file is less than 10 megabytes, you can start converting it right away. Click or drag your file to the appropriate area.
![2](https://media.discordapp.net/attachments/856234593153056781/1212757643890925608/2024-02-29_15.38.20.png?ex=65f2ff92&is=65e08a92&hm=f67198552e35d05f734f251275909eb29f988067e97f90a6ec1a64949910f606&=&format=webp&quality=lossless&width=2260&height=1304)

3. Here you can see some information about your file and choose a new available format for conversion from the drop-down list. Click on the spear and wait for the conversion to complete.
![3](https://media.discordapp.net/attachments/856234593153056781/1212757645216321607/2024-02-29_15.40.00.png?ex=65f2ff92&is=65e08a92&hm=52648e2b87ff668bf946ad60f2d302bd61696e3149d01ed7c1aa52f4116145f9&=&format=webp&quality=lossless&width=2592&height=662)

4. After successful conversion, the file will be automatically downloaded and you will be notified.
![5](https://media.discordapp.net/attachments/856234593153056781/1212757645568516106/2024-02-29_15.41.06.png?ex=65f2ff92&is=65e08a92&hm=a75c849d1b2f1aa296a9c441f7d56050689a19f3f062271c466dd9114bb626cd&=&format=webp&quality=lossless&width=2592&height=820)

5. To convert files larger than 10MB, you will need to register. Where you will be asked to provide your details: Name, email and password.
![6](https://media.discordapp.net/attachments/856234593153056781/1212757644348235806/2024-02-29_15.39.19.png?ex=65f2ff92&is=65e08a92&hm=005f64267dd43b5b09129042bb500030c27c574781967d29f65f621542e9c1b7&=&format=webp&quality=lossless&width=2096&height=1304)

6. To log in to your profile, you only need to correctly enter the data you entered during registration.
![7](https://media.discordapp.net/attachments/856234593153056781/1212757644826116156/2024-02-29_15.39.32.png?ex=65f2ff92&is=65e08a92&hm=951b9768519c0d8f6c2e2f0665bbfe87dd81dbbdef29bfac8f2062afc9df19ac&=&format=webp&quality=lossless&width=2088&height=1304)

7. To change your email or password, you need to fill in the appropriate fields in your profile and click the button.
![8](https://media.discordapp.net/attachments/856234593153056781/1212757646021759028/2024-02-29_15.41.27.png?ex=65f2ff92&is=65e08a92&hm=8506b4d3a6073136315c99950f7705ffb4124004b6251a8a183efde022e85901&=&format=webp&quality=lossless&width=2082&height=1304)

---

## Conclusion

This documentation offers a comprehensive guide to understanding, setting up, and utilizing the File Converter Web Application.
