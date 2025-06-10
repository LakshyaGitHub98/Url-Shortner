const express = require('express'); // Acuiring express for routing
const { shortenUrl, redirectUrl, getVisitHistory } = require('../controllers/url'); // Importing URL controller functions

const router = express.Router(); // Creating a new router instance

router.post('/shorten', shortenUrl); // Take a long url and return a shotened version to access it 
router.get('/:shortId', redirectUrl);// Redirected to long url using nanoid
router.get('/history/:shortId', getVisitHistory); // Fetch visit history

module.exports = router;// Exporting for using it in index.js