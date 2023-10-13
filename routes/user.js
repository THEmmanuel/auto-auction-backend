const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Crrate a new user
router.post('/', async (req, res) => {
	try {
		// Check if user with the  specified wallet exists
		const existingUser = await User.findOne({
			walletAddress: req.body.walletAddress
		});

		if (existingUser) {
			// A user with this userID already exists, so return an error
			return res.status(400).json({
				error: 'A user with this id already exists'
			});
		}

		// Set the userRole to 'member' in the req.body
		req.body.role = 'member';

		// Create a new user document
		const newUser = new User(req.body);

		// Save the new user document to the database
		const savedUser = await newUser.save();
		res.status(200).json(savedUser);

	} catch (error) {
		res.status(400).json({
			error: error.message
		});
	}
});