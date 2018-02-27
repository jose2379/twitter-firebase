const path = require('path');
const env = require('node-env-file');
const firebase = require('firebase');

env(path.resolve(__dirname, '..', '.env'));

// -----------------------------
// Start coding here!
// Initialize Firebase with process.env vars
// -----------------------------
