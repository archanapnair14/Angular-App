require('dotenv').config();         
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');  
const BodyParser = require("body-parser");


const app = express();  
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));  
app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200'  
}));


const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');  
};

connectDB();

// Routes

const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes);

const productRoutes = require('./Routes/productRoutes');
app.use('/api/products',productRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
