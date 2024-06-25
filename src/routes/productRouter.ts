import { Router } from "express";
// Import controller functions and middleware
import { validateProduct } from "../middlewares/validationMiddleware";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router: Router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.put("/products/:id", validateProduct, updateProduct);
router.post("/products", validateProduct, createProduct);
router.delete("/products/:id", deleteProduct);
export { router as productRouter };
