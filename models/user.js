const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	email: {
		type: String,
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

	auctionedCars: [{

	}],

	boughtCars: [{

	}],

	bids: [{

	}]
});

module.exports = mongoose.model('Users', UsersSchema)