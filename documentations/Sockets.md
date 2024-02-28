## Socket Usage in Project

The project utilizes WebSocket technology to enable real-time communication between the server and client. Below is a breakdown of how sockets are implemented and utilized in the project:

### 1. **Server-Side Socket Configuration (`app.js`):**
   - A WebSocket server is created using the `ws` library.
   - WebSocket server is instantiated on the same HTTP server instance as the Express application.

### 2. **WebSocket Event Handling (`app.js`):**
   - Upon a client connection, a message is logged to the console.
   - Periodic messages are sent to the client to provide instructions and information about the application.
   - Interval timers are managed to send periodic messages and clear intervals upon client disconnection.

### 3. **Client-Side WebSocket Setup (`fileHandler.js`):**
   - WebSocket connection is established with the server.
   - Event listeners are set up to handle various WebSocket events:
     - `onopen`: Log confirmation of successful connection to the WebSocket server.
     - `onmessage`: Process incoming messages from the server and display notifications to the user.
     - `onerror`: Log any errors encountered with WebSocket communication and redirect the user to an error page if necessary.

### 4. **WebSocket Message Handling (`fileHandler.js`):**
   - Incoming messages from the server are displayed as notifications to the user.
   - Notifications are dynamically added to the DOM and removed after a specified duration.

### 5. **Usage in Application:**
   - WebSocket is primarily used for providing instructions and notifications to users.
   - Messages are sent periodically to inform users about application functionalities, such as file type support and authentication requirements for file conversion.

### 6. **Error Handling:**
   - Errors encountered during WebSocket communication are logged, and users are redirected to an error page for further assistance.

### 7. **Integration with Other Components:**
   - WebSocket integration is primarily confined to the file handling component (`fileHandler.js`).
   - It enhances user experience by providing real-time updates and instructions without the need for manual refreshes.

### Note:
- WebSocket technology ensures seamless and interactive communication between the server and client, enhancing the overall functionality of the application.
- Detailed error handling ensures that users are appropriately guided in case of communication failures.