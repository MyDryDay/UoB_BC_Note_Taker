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

// // Test the route
// router.get('/', (req, res) => {
//     res.json({ message: 'Success!' });
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

// Starting the server
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));