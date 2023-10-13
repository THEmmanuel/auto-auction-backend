const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car');
const User = require('./user');
const Auction = require('./auction');

const BidSchema = new Schema({
	car: {
		type: Schema.Types.ObjectId,
		ref: Car
	},

	auction: {
		type: Schema.Types.ObjectId,
		ref: Auction
	},

	bidder: {
		type: Schema.Types.ObjectId,
		ref: User
	},

	bidWinnerWallet: {
		type: string,
		required: true,
	},

	bidAmount: {
		type: string,
		required: true
	},

	bidStatus: {
		type: string,
		required: true
	},

	bidTimestamp: {
		type: string,
		required: true
	}
})

module.exports = mongoose.model('Bid', BidSchema);