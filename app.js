const path = require('path');
const express = require('express');
require('dotenv/config');

// require('./config/db.js')
const connectDB = require('./config/db');
connectDB();
const cors = require('cors');

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// satatic folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/stores', require('./routes/stores'));

app.listen(process.env.PORT || 4000, (err) => {
	if (err) return console.error(err);
	console.log('server is running on port', process.env.PORT);
});
