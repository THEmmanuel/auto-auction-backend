const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Car = require('./car');

const NFTSchema = new Schema({
	ownerWallet: {
		type: String,
		required: true,
	},

	car: {
		type: Schema.Types.ObjectId,
		ref: Car
	},

	atrributes: {
		type: Object,
		required: true,
	},

	imageURL: {
		type: String,
		required: true,
	},

	mintedDate: {
		type: String,
		required: true,
	},

	contractAddress: {
		type: String,
		required: true,
	},
})