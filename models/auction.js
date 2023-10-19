const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuctionSchema = new Schema({
	car: {
		type: String,
		required: true
	},

	creatorWalletAddress: {
		type: String,
		required: true
	},

	status: {
		type: String,
		required: true,
	},

	NFTMinted: {
		type: Boolean,
	},

	NFT: {
		type: String
	},

	bids: [{
		type: String
	}],

	initialPrice: {
		type: String,
		required: true,
	},

	reservePrice: {
		type: String,
	},

	auctionDuration: {
		type: String,
		required: true,
	},

	auctionStartTime: {
		type: String,
		required: true,
	},

	auctionEndTime: {
		type: String,
	},

	winBid: {
		type: String
	},
})

module.exports = mongoose.model('Auction', AuctionSchema);