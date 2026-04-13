const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
const reviewRoutes = require('./routes/reviewRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/reviews', reviewRoutes);
app.use('/api/contact', contactRoutes);

// Health check for API
app.get('/api/health', (req, res) => res.json({ message: 'Maharana Pratap School API is running!' }));

// Serve frontend unconditionally
const path = require('path');
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Ensure API requests don't hit the catch-all if not found, but return 404
app.get('/api/*', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/maharana_pratap_school')
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    // Start server anyway for health checks
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT} (DB offline)`));
  });
