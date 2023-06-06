# SocioMedia

Welcome to the SociaMedia! This is a Node.js backend server for a social media application that allows users to make friends, share posts, like comments, update profile photos, and much more. Please note that the client part of the application is currently under construction.

## Installation

To install and run the Social Media App server, please follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/Ratnesh2003/SocioMedia.git
   ```

3. Navigate to the project's directory:

   ```
   cd server
   ```

4. Install the dependencies by running the following command:

   ```
   npm install
   ```

5. Create a `.env` file in the root directory of the project and provide the required environment variables. It must contain the following variables:

    ```
    MONGO_URL='mongodb://localhost:27017/SocioUser'
    PORT=3000
    JWT_SECRET='ThisIsMySecretIAmJustWritingThisToMakeThisTextLonger'
    ```

6. Once the dependencies are installed and the environment variables are set, start the server with the following command:

   ```
   npm start
   ```

   This will start the server on the default port `3000`.

7. Congratulations! The Social Media App server is now up and running. You can access the server's endpoints using a tool like [Postman](https://www.postman.com/) or any API testing tool of your choice.

## Features

The Social Media App offers the following features:

- User registration and authentication with JWT Tokens
- Friend requests and friend management
- Creating, updating, and deleting posts
- Liking and commenting on posts
- Uploading and updating profile photos
- Media sharing (photos, videos, etc.)
- User profile management

Please note that these features are available through the API endpoints provided by the server. The client part of the application, which will provide a user-friendly interface to interact with these features, is still under construction.

