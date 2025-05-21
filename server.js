const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
// const chatRoutes = require('./routes/middleman');
const chatRoutes = require('./routes/chat');

const app = express();
const port = process.env.PORT || 8000;

// Configure CORS 
app.use(cors());
// Body parsing middleware
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  next();
});

// Error handling for JSON parsing
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('JSON parsing error:', err);
    return res.status(400).json({ 
      error: 'Invalid JSON',
      details: err.message 
    });
  }
  next();
});

// Use routes
// app.use('/api/chat', chatRoutes);
app.use('/api/chat', chatRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers
  });
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message,
    status: 'error'
  });
});

// Log environment variables (safely)
console.log('Environment configuration:', {
  port,
  nodeEnv: process.env.NODE_ENV,
  hasOpenAIKey: !!process.env.OPENAI_API_KEY,
  openAIKeyLength: process.env.OPENAI_API_KEY?.length,
  openAIKeyPrefix: process.env.OPENAI_API_KEY?.substring(0, 3)
});

// Start server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
}); 
