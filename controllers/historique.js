const Historique = require('../models/historique');

// Get all historiques
exports.getAllHistorique = async (req, res) => {
    const historiques = await Historique.find();
    res.status(200).json({ historiques });
  };


// Add historiques
exports.postHistoriques = async (req, res) => {
  try {
    const historiquesData = req.body.map((data) => ({
      ...data,
      categorie1: data.categorie1 || "",  // Valeur par défaut: chaîne vide si non fournie
      categorie2: data.categorie2 || "",  // Valeur par défaut: chaîne vide si non fournie
      categorie3: data.categorie3 || ""   // Valeur par défaut: chaîne vide si non fournie
    }));

    const insertedHistoriques = await Historique.insertMany(historiquesData);

    res.status(201).json({
      historiques: insertedHistoriques,
    });
  } catch (error) {
    console.error('Erreur lors de l\'insertion des historiques:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


// Recherche par date, libelle ou debit
exports.rechercheHistoriques = async (req, res) => {
  try {
    const { date, libelle, debit } = req.query;

    // Construire le filtre de recherche en fonction des paramètres fournis
    const filter = {};

    if (date) {
      // Supposons que date soit au format "jj/mm/yyyy"
      const dateObject = new Date(date.split("/").reverse().join("-"));
      filter.dateOperation = { $eq: dateObject };
    }

    if (libelle) {
      filter.libelle = { $regex: new RegExp(libelle, "i") }; // Recherche insensible à la casse
    }

    if (debit) {
      filter.debit = { $gt: parseFloat(debit) }; // Recherche de débits supérieurs à la valeur fournie
    }

    const result = await Historique.find(filter);

    res.status(200).json({
      historiques: result,
    });
  } catch (error) {
    console.error('Erreur lors de la recherche des historiques:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


// Update historique with categorie1, categorie2, and categorie3
exports.updateHistoriqueCategories = async (req, res) => {
  try {
    const { historiqueId, categorie1, categorie2, categorie3 } = req.body;

    // Validate that historiqueId is provided
    if (!historiqueId) {
      return res.status(400).json({ error: 'Historique ID is required.' });
    }

    // Find the historique document by ID
    const existingHistorique = await Historique.findById(historiqueId);

    // Check if the historique document exists
    if (!existingHistorique) {
      return res.status(404).json({ error: 'Historique not found.' });
    }

    // Update the historique document with the provided categories
    existingHistorique.categorie1 = categorie1 || existingHistorique.categorie1;
    existingHistorique.categorie2 = categorie2 || existingHistorique.categorie2;
    existingHistorique.categorie3 = categorie3 || existingHistorique.categorie3;

    // Save the updated historique document
    const updatedHistorique = await existingHistorique.save();

    res.status(200).json({
      historique: updatedHistorique,
    });
  } catch (error) {
    console.error('Error updating historique categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


