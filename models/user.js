const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car')

const UserSchema = new Schema({
	email: {
		type: String,
	},

	userID: {

	},

	username: {
		type: String,
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
		required: true,
	},

	rating: {
		type: String,
		required: true,
	},

	location: {
		type: String,
	},

	createdAt: {
		type: String,
		required: true,
	},

	createdAuctiona: [{
		// type: mongoose.Schema.Types.ObjectId,
		// ref: Car
	}],

	participatedAuctions: [{
		
	}],

	bids: [{

	}]
});

module.exports = mongoose.model('User', UserSchema)