const express = require('express');

const controller = require('../controllers/categories2');
const router = express.Router();


// Get all categories2
router.get('/', controller.getCategories2);

// Get Category 2 Name By Id
router.get('/get-category2-name/:categoryId', controller.getCategory2NameById);


module.exports = router;