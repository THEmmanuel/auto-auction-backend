const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car');
const User = require('./user');
const Bid = require('./bid');
const NFT = require('./NFT');

const AuctionSchema = new Schema({
	car: {
		type: String
	},

	sellerWallet: {
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

	winBid: {
		type: String
	},
})

module.exports = mongoose.model('Auction', AuctionSchema);