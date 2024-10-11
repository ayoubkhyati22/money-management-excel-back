const express = require('express');

const controller = require('../controllers/historique');
const router = express.Router();


// Get all historiques route
router.get('/', controller.getAllHistorique);

// Add historiques route
router.post('/', controller.postHistoriques);

// Search historiques route
router.get('/search', controller.rechercheHistoriques);

// Update Categories
router.put('/', controller.updateHistoriqueCategories);



module.exports = router;