// Import required modules
const http = require('http');
const app = require('./app'); // Import the Express application from app.js

// Set the port
const PORT = process.env.PORT || 5000;

// Create an HTTP server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
