// Simple server to serve static file from dist directory
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3707;

// connect to dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// redirect root to first project
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'src', 'pages', 'main', 'main.html'));
});

// project links are routed to project pages using route param
app.get('/projects/:name', (req, res) => {
  const name = req.params.name;
  const filePath = path.join(__dirname, 'dist', 'src', 'pages', `${name}`, `${name}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      // Fallback for file not found (404)
      res.status(404).send('<h1>404 - Page Not Found</h1>');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});