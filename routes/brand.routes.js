import express from "express";
import {
  addBrand,
  fetchBrands,
  fetchSingleBrand,
  editBrand,
  removeBrand
} from "../controllers/brand.controller.js";

const router = express.Router();

router.route("/")
  .post(addBrand)
  .get(fetchBrands);

router.route("/:id")
  .get(fetchSingleBrand)
  .put(editBrand)
  .delete(removeBrand);

export default router;