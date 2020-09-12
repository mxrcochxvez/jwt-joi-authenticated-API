const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

// Middleware
app.use(bodyParser.json());

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Router Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

// Connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected to db')
);

app.listen(3000, () => console.log('Server up and running.'));