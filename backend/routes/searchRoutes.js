const express = require('express');
const router = express.Router();

const { searchData } = require('../controllers/search.js');

router.route('/').get(searchData);

module.exports = router;