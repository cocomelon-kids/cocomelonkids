const express = require('express');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Middleware to serve the Vite frontend
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Adjust path as needed

// API route
app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Hello from Backend', time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// Serve the Vite frontend for any route that isn't API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html')); // Adjust path as needed
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
