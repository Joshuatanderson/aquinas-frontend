const express = require('express');
const router = express.Router();

const { searchData } = require('../controllers/search.js');

router.get("/:searches", searchData);

module.exports = router;