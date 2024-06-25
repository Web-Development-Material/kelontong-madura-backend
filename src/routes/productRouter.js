"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
var express_1 = require("express");
// Import controller functions and middleware
var validationMiddleware_ts_1 = require("../middlewares/validationMiddleware.ts");
var productController_ts_1 = require("../controllers/productController.ts");
var router = express_1.default.Router();
exports.productRouter = router;
router.get("/products", productController_ts_1.getProducts);
router.get("/products/:id", productController_ts_1.getProductById);
router.put("/products/:id", validationMiddleware_ts_1.validateProduct, productController_ts_1.updateProduct);
router.post("/products", validationMiddleware_ts_1.validateProduct, productController_ts_1.createProduct);
router.delete("products/:id", productController_ts_1.deleteProduct);
