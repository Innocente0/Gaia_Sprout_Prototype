require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Import routes
const indexRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set view engine to EJS and set views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: false }));

// Mount routes
app.use('/', indexRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
