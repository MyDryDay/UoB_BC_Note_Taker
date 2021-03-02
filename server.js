// Add dependencies
const express = require('express');
const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');
const app = express();

// Add middleware
app.use.urlencoded({extended: true});
app.use.json();