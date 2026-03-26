import Brand from "../models/brand.model.js";
import slugify from "slugify";

export const addBrand = async (req, res) => {
  const { name, image } = req.body;

  const newBrand = await Brand.create({
    name,
    slug: slugify(name, { lower: true }),
    image
  });

  res.status(201).json({
    message: "Brand created successfully",
    result: newBrand
  });
};

export const fetchBrands = async (req, res) => {
  const brandList = await Brand.find();

  res.status(200).json({
    count: brandList.length,
    result: brandList
  });
};

export const fetchSingleBrand = async (req, res) => {
  const { id } = req.params;

  const brand = await Brand.findById(id);

  if (!brand) {
    return res.status(404).json({
      message: "Brand not found"
    });
  }

  res.status(200).json({
    result: brand
  });
};

export const editBrand = async (req, res) => {
  const { id } = req.params;
  const { name, image } = req.body;

  const updatedBrand = await Brand.findByIdAndUpdate(
    id,
    {
      name,
      slug: name ? slugify(name, { lower: true }) : undefined,
      image
    },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    message: "Brand updated",
    result: updatedBrand
  });
};

export const removeBrand = async (req, res) => {
  const { id } = req.params;

  await Brand.findByIdAndDelete(id);

  res.status(200).json({
    message: "Brand deleted"
  });
};
