const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.options('*', cors()); // Respond to preflight

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/chatAgent')); 
app.use(require('./routes/imageAnalyzerAgent')); 
app.use(require('./routes/outdoorAdvisorAgent'));
app.use(require('./routes/productRecommendationsAgent'));

// Define a route
app.get('/hello', (req, res) => {
  res.send('Hello');
});

// Serve the HTML file
app.use(express.static(path.join(__dirname, '/')));

// Route for /index
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'dashboard.html'));
});

app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
