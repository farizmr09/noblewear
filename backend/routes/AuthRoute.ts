import express from "express";
import { loginOne } from "../controllers/AuthController";

const router = express.Router();

router.post("/login", loginOne);
// router.get("/products/search", getProductsByName);

export default router;
