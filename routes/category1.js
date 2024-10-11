const express = require('express');

const controller = require('../controllers/categories1');
const router = express.Router();


// Get all categories1
router.get('/', controller.getCategories1);

// Get Category 1 Name By Id
router.get('/get-category1-name/:categoryId', controller.getCategory1NameById);



module.exports = router;