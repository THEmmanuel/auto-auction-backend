const express = require('express');
const router = express.Router();
const Auction = require('../models/auction'); // Make sure the path to your model is correct

// Define a route to create a new auction
router.post('/', async (req, res) => {
	try {
		// Extract the data for the new auction from the request body
		const {
			car,
			creatorWalletAddress,
			status,
			NFTMinted,
			NFT,
			bids,
			initialPrice,
			reservePrice,
			auctionDuration,
			auctionStartTime,
			auctionEndTime,
			winBid,
		} = req.body;

		// Create a new auction instance using the Auction model
		const newAuction = new Auction({
			car,
			creatorWalletAddress,
			status,
			NFTMinted,
			NFT,
			bids,
			initialPrice,
			reservePrice,
			auctionDuration,
			auctionStartTime,
			auctionEndTime,
			winBid,
		});

		// Save the new auction to the database
		await newAuction.save();

		// Respond with a success message or the newly created auction data
		res.status(201).json(newAuction);
	} catch (error) {
		// Handle any errors that may occur during the process
		console.error(error);
		res.status(500).json({
			error: 'Failed to create the auction.'
		});
	}
});

router.get('/', async (req, res) => {
	try {
		const auctions = await Auction.find();

		res.status(200).json(auctions);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to retrieve auctions'
		});
	}
});


// Define a route to get a single auction by ID
router.get('/:id', async (req, res) => {
	try {
		const auction = await Auction.findById(req.params.id);

		if (!auction) {
			return res.status(404).json({
				error: 'Auction not found'
			});
		}

		res.status(200).json(auction);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to retrieve the auction'
		});
	}
});

// Define a route to get auctions by creatorWalletAddress
router.get('/creator/:creatorWalletAddress', async (req, res) => {
	try {
		const creatorWalletAddress = req.params.creatorWalletAddress;

		// Find auctions with the specified creatorWalletAddress
		const auctions = await Auction.find({
			creatorWalletAddress
		});

		if (auctions.length === 0) {
			return res.status(404).json({
				error: 'No auctions found for the specified creatorWalletAddress'
			});
		}

		res.status(200).json(auctions);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to retrieve auctions by creatorWalletAddress'
		});
	}
});

// Define a route to get auctions by bodytype
router.get('/by-bodytype/:bodytype', async (req, res) => {
	try {
		const bodytype = req.params.bodytype;

		// Find auctions where the referenced car has the specified bodytype
		const auctions = await Auction.find()
			.populate({
				path: 'car',
				match: {
					bodytype
				}, // Filter by the provided bodytype
				select: 'bodytype', // Include only the bodytype field of the car
			})
			.exec();

		// Filter out null or undefined car references
		const filteredAuctions = auctions.filter((auction) => auction.car !== null);

		if (filteredAuctions.length === 0) {
			return res.status(404).json({
				error: 'No auctions found for the specified bodytype',
			});
		}

		res.status(200).json(filteredAuctions);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to retrieve auctions by bodytype',
		});
	}
});

// Define a route to add a 'hash' field to a single auction by ID
router.post('/:id/add-hash', async (req, res) => {
	try {
		const auctionId = req.params.id;
		const {
			hash
		} = req.body;

		// Find the auction by ID
		const auction = await Auction.findById(auctionId);

		if (!auction) {
			return res.status(404).json({
				error: 'Auction not found',
			});
		}

		// Update the auction's 'hash' field
		auction.hash = hash;

		// Save the updated auction to the database
		await auction.save();

		res.status(200).json(auction);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to add hash to the auction',
		});
	}
});


module.exports = router;



// router.delete('/deleteAll', async (req, res) => {
// 	try {
// 		// Delete all auctions in the database
// 		const result = await Auction.deleteMany({});

// 		if (result.deletedCount > 0) {
// 			res.status(200).json({
// 				message: 'All auctions deleted successfully'
// 			});
// 		} else {
// 			res.status(404).json({
// 				error: 'No auctions found to delete'
// 			});
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({
// 			error: 'Failed to delete auctions'
// 		});
// 	}
// });