const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoUri = 'mongodb+srv://ayesha:dRhXznyyTNous7EC@cluster0.af1kc.mongodb.net/SwapIt?retryWrites=true&w=majority';
mongoose.connect(mongoUri)
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

// Sample Schema
const itemSchema = new mongoose.Schema({
   name: { type: String, required: true },
});
const Item = mongoose.model('Item', itemSchema);

//checking
app.get("/", (req, res) => {
   res.status(200).json({ message: "Root route is working!" });
});

app.post('/addskill', async(req, res)=>{
   const data = req.body;
})

// Sample Routes
app.get('/items', async (req, res) => {
   // res.status(200).json({ message: "Root route is working!" });
   const items = await Item.find();
   res.json(items);
});

app.post('/items', async (req, res) => {
   const newItem = new Item(req.body);
   await newItem.save();
   res.json(newItem);
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

app.get('/api/test', (req, res) => {
   res.json({ message: 'API is connected!' });
});
   