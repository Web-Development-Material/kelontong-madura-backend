"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
var madura_json_1 = require("../../dummy/madura.json");
var getProducts = function (res) {
    return res.send(madura_json_1.default);
};
exports.getProducts = getProducts;
var getProductById = function (req, res) {
    var id = req.params.id;
    var product = madura_json_1.default.productsData.find(function (productid) { return productid.id === parseInt(id); });
    if (!product) {
        res.status(404).send("product tak di temukan");
    }
    res.send(product);
};
exports.getProductById = getProductById;
var createProduct = function (req, res) {
    var prod = req.body;
    var newProduct = __assign(__assign({}, prod), { id: madura_json_1.default.productsData.length + 1 });
    madura_json_1.default.productsData.push(newProduct);
    return res.status(201).send(newProduct);
};
exports.createProduct = createProduct;
var updateProduct = function (req, res) {
    var id = req.params.id;
    var updateStock = req.body;
    var index = madura_json_1.default.productsData.findIndex(function (madura) { return madura.id === parseInt(id); });
    if (index !== -1) {
        madura_json_1.default.productsData[index] = __assign(__assign({}, madura_json_1.default.productsData[index]), updateStock);
        return res.status(200).send(madura_json_1.default.productsData[index]);
    }
    return res.status(404).send("Product not found");
};
exports.updateProduct = updateProduct;
var deleteProduct = function (req, res) {
    var id = req.params.id;
    var index = madura_json_1.default.productsData.findIndex(function (madura) { return madura.id === parseInt(id); });
    if (index !== -1) {
        var deleteProduct_1 = madura_json_1.default.productsData.splice(index, 1)[0];
        return res.status(200).send(deleteProduct_1);
    }
};
exports.deleteProduct = deleteProduct;
