const express = require('express');
const router = express.Router();
const Car = require('../models/car'); // Make sure the path to your Car model is correct

// Define a route to create a new car
router.post('/', async (req, res) => {
	try {
		// Extract the data for the new car from the request body
		const {
			make,
			imageURL,
			model,
			year,
			VIN,
			mileage,
			bodyType,
			transmission,
			fuelType,
			engine,
			description,
			drivetrain,
			interiorColor,
			exteriorColor,
			horsepower,
			sellerType,
			ownerWalletAddress,
		} = req.body;

		// Create a new car instance using the Car model
		const newCar = new Car({
			make,
			imageURL,
			model,
			year,
			VIN,
			mileage,
			bodyType,
			transmission,
			fuelType,
			engine,
			description,
			drivetrain,
			interiorColor,
			exteriorColor,
			horsepower,
			sellerType,
			ownerWalletAddress,
		});

		// Save the new car to the database
		await newCar.save();

		// Respond with a success message or the newly created car data
		res.status(201).json(newCar);
	} catch (error) {
		// Handle any errors that may occur during the process
		console.error(error);
		res.status(500).json({
			error: 'Failed to create the car.'
		});
	}
});


// Define a route to get a single car by its ID
router.get('/:id', async (req, res) => {
	try {
		const car = await Car.findById(req.params.id);

		if (!car) {
			return res.status(404).json({
				error: 'Car not found'
			});
		}

		res.status(200).json(car);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to retrieve the car'
		});
	}
});

// Define a route to get all cars
router.get('/', async (req, res) => {
	try {
		const cars = await Car.find();

		res.status(200).json(cars);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to retrieve cars'
		});
	}
});

module.exports = router;