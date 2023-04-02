const express = require('express');
const router = express.Router();

// This imports the express library, then make the const 
// @route   GET api/posts
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;