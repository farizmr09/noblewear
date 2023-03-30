import express from "express";
import {
  getProducts,
  getProductsByName,
} from "../controllers/ProductController";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/search", getProductsByName);

export default router;
