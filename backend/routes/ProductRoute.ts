import express from "express";
import { getProductsByName } from "../controllers/ProductController";

const router = express.Router();

router.get("/products", getProductsByName);

export default router;
