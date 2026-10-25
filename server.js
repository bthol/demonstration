// Simple server to serve static file from dist directory
require('dotenv');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3707;

// connect to dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// serve index page on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});