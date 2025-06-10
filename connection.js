const mongoose = require('mongoose');
// This file is to make connection to MongoDB using mongoose
const connectDB = async () => {
// This asynchronous function to connect to MongoDB    
    try {
        await mongoose.connect('mongodb://localhost:27017/urlshortener'); 
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB; // Exporting the function to use in other files