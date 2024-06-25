import { Router } from "express";
// Import controller functions and middleware
import { validateProduct } from "../middleware/validationMiddleware";

const router: Router = Router();

// Define your routes here

export { router as productRouter };
