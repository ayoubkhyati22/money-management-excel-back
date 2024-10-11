const mongoose = require('mongoose');

const historiqueSchema = mongoose.Schema({
    banque: { type: String },
    dateOperation: { type: String }, // Format "jj/mm/yyyy"
    dateValeur: { type: String }, // Format "jj/mm/yyyy"
    libelle: { type: String },
    ref: { type: String },
    credit: { type: Number },
    debit: { type: Number },
    categorie1: { type: String },
    categorie2: { type: String },
    categorie3: { type: String }
  });

module.exports = mongoose.model('Historiques', historiqueSchema);    