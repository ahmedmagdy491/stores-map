const Store = require('../models/Store');

exports.getStores = async (req, res) => {
	try {
		const stores = await Store.find();
		return res.status(200).json({
			success: true,
			count: stores.length,
			data: stores,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Server Error' });
	}
};

exports.addStore = async (req, res) => {
	try {
		const store = await Store.create(req.body);
		return res.status(200).json({
			success: true,
			data: store,
		});
	} catch (error) {
		console.error(error);
		if (error.code === 1100)
			res.status(400).json({ error: 'The store already exists' });
		res.status(500).json({ error: 'Server Error' });
	}
};
