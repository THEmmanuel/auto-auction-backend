const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoute = require('./routes/user');
const auctionRoute = require('./routes/auction');
const carRoute = require('./routes/car');

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use(cors({
	origin: '*'
}));
app.use(express.json());

mongoose.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected!'))
	.catch(err => console.log(err))

app.get('/', (req, res) => {
	res.send('Auto auction backend. Main Route')
});

app.use('/users', userRoute);
app.use('/cars', carRoute);
app.use('/auctions', auctionRoute);

console.log(`running at ${port}`)
app.listen(port);

module.exports = app;