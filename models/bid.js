const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car');
const User = require('./user');
const Auction = require('./auction');

const BidSchema = new Schema({
	car: {
		type: String
	},

	auction: {
		type: String
	},

	bidder: {
		type: String
	},

	bidAmount: {
		type: String,
		required: true
	},

	bidStatus: {
		type: String,
		required: true
	},

	bidTimestamp: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Bid', BidSchema);