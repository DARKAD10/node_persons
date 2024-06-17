const mongoose = require('mongoose');

// URL for MongoDB
const mongourl = 'mongodb://localhost:27017/schools';

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listeners for the database connection
db.on('connected', () => {
    console.log("Connected to Mongo server");
});

db.on('error', (err) => {
    console.log("Error in mongodb connection", err);
});

db.on('disconnected', () => {
    console.log("Disconnected from Mongo server");
});

// Export the database connection
module.exports = db;

