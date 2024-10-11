const Category3 = require('../models/category3');

// Get all categories 3
exports.getCategories3 = async (req, res) => {
    const categories3 = await Category3.find();
    res.status(200).json({ categories3 });
  };

// Get category name by ID
exports.getCategory3NameById = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const category = await Category3.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: 'Category 3 not found' });
    }

    res.status(200).json({ categoryName: category.name });
  } catch (error) {
    console.error('Error fetching category name by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};