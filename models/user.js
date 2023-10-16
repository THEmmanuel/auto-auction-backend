const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Auction = require('./auction');
const Bid = require('./bid');

const UserSchema = new Schema({
	email: {
		type: String,
	},

	userID: {
		type: String
	},

	fullname: {
		type: String
	},

	walletAddress: {
		type: String,
		required: true,
	},

	role: {
		type: String,
		required: true,
	},

	profileImage: {
		type: String,
	},

	rating: {
		type: String,
		// required: true,
	},

	location: {
		type: String,
	},

	createdAt: {
		type: String,
		required: true,
	},

	createdAuctions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: Auction
	}],

	participatedAuctions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: Auction
	}],

	bids: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: Bid
	}]
});

module.exports = mongoose.model('User', UserSchema)