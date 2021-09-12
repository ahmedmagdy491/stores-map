const NodeGeocoder = require('node-geocoder');

const options = {
	provider: process.env.GEOCODER_PROVIDER,
	apiKey: process.env.GEOCODER_KEY,
	formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
// Using callback
// const res = await geocoder.geocode(.'29 champs elysée paris');
