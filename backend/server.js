const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const mongodb = mongoose.connection;
mongodb.on('connected', () => {
    console.log("MongoDB connected.");
});

app.use('/', require('./routes/studentRoute'));

app.listen(port, () => {
    console.log("Express running on port: " + port);
});