require('dotenv').config();         
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');         

const app = express();    

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');  
};

connectDB();

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
