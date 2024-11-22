// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize dotenv to manage environment variables
dotenv.config();

// Import routes
const userRoutes = require('./routes/userRoutes');
const transporterRoutes = require('./routes/transporterRoutes');

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((error) => console.error('MongoDB Connection Failed:', error));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/transporters', transporterRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Transporter Scheduling System API');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred',
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
