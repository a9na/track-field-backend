require('dotenv').config(); // Load environment variables from .env file

const config = {
  // Database configuration
  db: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/trackfield', // Fallback to local DB if MONGO_URI is not set
  },
  
  // Server configuration
  server: {
    port: process.env.PORT || 5000, // Fallback to port 5000 if PORT is not set
  },
  
  // Other configurations can be added here
};

module.exports = config;
