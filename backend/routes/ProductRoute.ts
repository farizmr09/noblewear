import express from "express";
import auth from "../middleware/Auth";
import {
  getProducts,
  getProductsByName,
} from "../controllers/ProductController";

const router = express.Router();

router.get("/products", auth, getProducts);
router.get("/products/search", getProductsByName);

export default router;
