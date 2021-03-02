// Add dependencies
const express = require('express');
const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');
const app = express();

// Add middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set the port
const PORT = process.env.PORT || 8080;

// Declare routes for API
// Declare an instance of the express Router
const router = express.Router();

// Test the route
router.get('/', (req, res) => {
    res.json({ message: 'Success!' });
});

// Register routes for API
app.use('/api', router);

// Starting the server
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);