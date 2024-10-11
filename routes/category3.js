const express = require('express');

const controller = require('../controllers/categories3');
const router = express.Router();


// Get all categories3
router.get('/', controller.getCategories3);

// Get Category 3 Name By Id
router.get('/get-category3-name/:categoryId', controller.getCategory3NameById);


module.exports = router;