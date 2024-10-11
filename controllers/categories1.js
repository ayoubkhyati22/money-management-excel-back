const Category1 = require('../models/category1');

// Get all categories 1
exports.getCategories1 = async (req, res) => {
    const categories1 = await Category1.find();
    res.status(200).json({ categories1 });
  };

// Get category name by ID
exports.getCategory1NameById = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const category = await Category1.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: 'Category 1 not found' });
    }

    res.status(200).json({ categoryName: category.name });
  } catch (error) {
    console.error('Error fetching category name by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};