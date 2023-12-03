# Chatwave Web App

## Description

The Chatwave web app is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to communicate with each other in real-time, creating a seamless and interactive chat experience.

## Features

- [x] Real-time messaging: Users can send and receive messages instantly.
- [x] User authentication: Secure user authentication using JWT (JSON Web Tokens).
- [ ] MongoDB database: Persistent storage for chat messages and user data.
- [ ] Responsive design: A user-friendly interface that works seamlessly on various devices. 

## Technologies Used

- **MongoDB**: Database to store user information and chat messages.
- **Express.js**: Backend framework for handling server-side logic.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: Runtime environment for server-side JavaScript.
- **Socket.io**: Real-time bidirectional event-based communication.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JavidSumra/ChatWave
   ```
2. Clone the Backend repository:

    ```bash
      git clone https://github.com/JavidSumra/ChatWave_Backend
    ```
3. Navigate to the project directory:

    ```bash
      cd ChatWave
    ```
4. Install dependencies for both the client and server:

    ```bash
      cd ChatWave && npm install
      cd ../ChatWave_Backend && npm install
    ```
5. Create a `.env` file in the `ChatWave_Backend` directory with the following content:

    ```bash
      SECRET_TOKEN = JWT_SECRET_TOKEN
      email = YOUR_EMAIL
      Password = YOUR_APP_PASSWORD_FOR_EMAIL
      MONGO_URL = YOUR_MONGODB_CONNECTION_STRING
    ```
6. Create a `.env` file in the `ChatWave` directory with the following content:   
     ```bash
     VITE_API_ENDPOINT = http://localhost:3007
     ``` 
7. Start the `server` and `client`:
    ```bash
      # In the ChatWave_Backend directory
      npm run start

      # In the ChatWave directory
      npm run dev
    ```
8. Open your browser and visit `http://localhost:3007` to access the ChatWave web app.
