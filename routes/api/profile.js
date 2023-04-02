const express = require('express');
const router = express.Router();

// This imports the express library, then make the const 
// @route   GET api/profile
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;