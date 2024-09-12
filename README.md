This is a simple inventory management application where you can add and delete items. It is created with React.js for the frontend and managed with the Java Spring Boot framework on the backend, which is connected to a PostgreSQL database.

To run this app, follow these steps:

Install Docker Desktop on your machine.

Navigate to the backend directory and run the following command to start the backend services:

docker-compose up -d
Configure the PostgreSQL datasource with the following settings:

Username: inventory
Password: inventory
URL: jdbc:postgresql://localhost:5432/items
Once the backend is set up, go to the frontend directory and start the React application by running:


npm start
