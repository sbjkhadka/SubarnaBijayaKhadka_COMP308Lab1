// Configure environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Configure PORT
const PORT = 3000;

// Load express module
const configureServer = require('./config/express')

// Create a new express application instance
const app = configureServer();

// Listen to port 
app.listen(PORT);

// Log the server status in console
console.log( `Server is running at port ${PORT}`)

module.exports = app;