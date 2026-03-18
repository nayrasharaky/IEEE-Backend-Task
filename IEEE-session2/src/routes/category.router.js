const express = require("express");

const { createCategory , getCategoryById , getAllCategories , updateCategory , deleteCategory } = require("../controllers/category.controller");

const router = express.Router();

router.route("/").post(createCategory).get(getAllCategories);

router.route('/:id').get(getCategoryById).patch(updateCategory).delete(deleteCategory);

module.exports = router;

// model → controller → route
