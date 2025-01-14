require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const itemRoutes = require('./routes/search.js')
const cors = require('cors'); 
const app = express();

// midleware
app.use(express.json());
app.use(cors());

// Access the environment variable
const uri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(uri)
.then(() => {
    console.log("Connected to MongoDB Atlas!");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});


// Use routes 
app.use('/api/items', itemRoutes);

// server runnig put
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server run http://localhost:${port}`));

