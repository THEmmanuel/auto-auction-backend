const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car');
const User = require('./user');

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
		required: true,
	},

	NFT: {

	},

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

	bidWinnerWallet: {
		type: string,
		required: true,
	},

	winBid: {

	},

	currentHighestBid: {

	}
})

module.exports = mongoose.model('Auction', AuctionSchema);