const Category = require("../models/category.model");
const slugify = require("slugify");

//create
const createCategory = async (req, res) => {
  // mongoose
  const category = await Category.create({
    name: req.body.name,
    slug: slugify(req.body.name),
  });

  res.status(201).json({
    status: "success",
    data: category,
  });
};

// read

const getAllCategories = async (req, res) => {
  const categories = await Category.find({});

  res.status(200).json({
    status: "success",
    data: categories,
  });
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;

  const category = await Category.findById(id);

  res.status(200).json({
    status: "success",
    data: category,
  });
};

const updateCategory = async (req, res) => {
  const id = req.params.id;

  const category = await Category.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      slug: slugify(req.body.name),
    },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).json({
    status : "success",
    data : category
  })
};


const deleteCategory = async (req,res) => {
    const id = req.params.id;

    await Category.findByIdAndDelete(id);

    res.status(204).json({
        status : "success",
        data : null
    })
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
