const express = require('express'); // Importing express
const connectDB = require('./connection'); // Making connection to MongoDB
const urlRoutes = require('./routes/url'); // Importing URL routes
const cors = require('cors'); // Importing CORS for cross-origin requests (Mainly for frontend access)

const app = express(); // Instance of express application

// Midllewares
app.use(express.json()); // To parse JSON bodies 
app.use(cors()); // To allow cross-origin requests

// Connect to MongoDB
connectDB(); // Connect to database
app.use('/', urlRoutes); // Using URL routes

app.listen(3000, () => console.log('Server running on port 3000')); // Starting the server on port 3000