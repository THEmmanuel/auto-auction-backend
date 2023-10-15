const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
	make: {
		type: String,
		required: true,
	},

	model: {
		type: String,
		required: true,
	},

	year: {
		type: String,
		required: true,
	},

	VIN: {
		type: String,
		required: true,
	},

	mileage: {
		type: String,
		required: true,
	},

	bodyType: {
		type: String,
		required: true,
	},

	transmission: {
		type: String,
		required: true,
	},

	fuelType: {
		type: String,
		required: true,
	},

	engine: {
		type: String,
		required: true,
	},

	features: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	drivetrain: {
		type: String,
		required: true,
	},

	interiorColor: {
		type: String,
		required: true,
	},

	exteriorColor: {
		type: String,
		required: true,
	},

	sellerType: {
		type: String,
		required: true,
	},

	walletAddress: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Car', CarSchema)