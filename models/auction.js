const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car');
const User = require('./user');
const Bid = require('./bid');
const NFT = require('./NFT');

const AuctionSchema = new Schema({
	car: {
		type: Schema.Types.ObjectId,
		ref: Car
	},

	seller: {
		type: Schema.types.ObjectId,
		ref: User
	},

	status: {
		type: String,
		required: true,
	},

	NFTMinted: {
		type: Boolean,
	},

	NFT: {
		type: Schema.types.ObjectId,
		ref: NFT
	},

	bids: [{
		type: Schema.types.ObjectId,
		ref: Bid
	}],

	initialPrice: {
		type: string,
		required: true,
	},

	reservePrice: {
		type: string,
	},

	auctionDuration: {
		type: string,
		required: true,
	},

	winBid: {
		type: Schema.types.ObjectId,
		ref: Bid
	},
})

module.exports = mongoose.model('Auction', AuctionSchema);