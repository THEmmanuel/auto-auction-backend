const express = require('express');
const router = express.Router();
const Bid = require('../models/bid')

// Create a new bid
router.post('/', async (req, res) => {
	try {
		const {
			car,
			auction,
			bidder,
			bidAmount,
			bidStatus,
			bidTimestamp
		} = req.body;

		// Create a new Bid instance using the schema
		const newBid = new Bid({
			car,
			auction,
			bidder,
			bidAmount,
			bidStatus,
			bidTimestamp
		});

		// Save the new bid to the database
		await newBid.save();

		res.status(201).json(newBid);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'An error occurred while creating a bid.'
		});
	}
});

// get a bid
router.get('/:bidId', async (req, res) => {
	try {
		const bid = await Bid.findById(req.params.bidId);

		if (!bid) {
			return res.status(404).json({
				error: 'Bid not found'
			});
		}

		res.status(200).json(bid);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'An error occurred while retrieving the bid.'
		});
	}
});

// get all bids
router.get('/', async (req, res) => {
	try {
		const bids = await Bid.find();

		res.status(200).json(bids);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'An error occurred while retrieving bids.'
		});
	}
});

// Add this route to your existing router
router.get('/auction/:auctionId', async (req, res) => {
	try {
		const auctionId = req.params.auctionId;

		const bids = await Bid.find({
			auction: auctionId
		});

		if (bids.length === 0) {
			return res.status(404).json({
				error: 'No bids found for the specified auction.'
			});
		}

		res.status(200).json(bids);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'An error occurred while retrieving bids for the specified auction.'
		});
	}
});




module.exports = router;