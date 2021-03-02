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