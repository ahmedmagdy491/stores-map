const mongoose = require('mongoose');

const connectDB = async () =>
	await mongoose.connect(
		process.env.DB_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(err) => {
			if (err) console.error('Error connecting to MongoDB!', err);
			else console.log('Connected to MongoDB!');
		}
	);

module.exports = connectDB;
