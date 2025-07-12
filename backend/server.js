const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ✅ CORS middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// ✅ MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/jwtauth')
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch((err) => console.error('❌ DB Error:', err));
