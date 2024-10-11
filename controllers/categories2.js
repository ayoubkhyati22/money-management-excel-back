const Category2 = require('../models/category2');

// Get all categories 2
exports.getCategories2 = async (req, res) => {
    const categories2 = await Category2.find();
    res.status(200).json({ categories2 });
  };


// Get category name by ID
exports.getCategory2NameById = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const category = await Category2.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: 'Category 2 not found' });
    }

    res.status(200).json({ categoryName: category.name });
  } catch (error) {
    console.error('Error fetching category name by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};