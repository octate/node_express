const express = require('express');
const { initDatabase } = require('./database');
const bookRoutes = require('./routes/bookRoutes');

// Initialize the database
initDatabase();

const app = express();
app.use(express.json());

// Use book routes
app.use('/book', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
