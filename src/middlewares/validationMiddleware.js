"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
var validateProduct = function (req, res, next) {
    var _a = req.body, nama = _a.nama, deskripsi = _a.deskripsi, harga = _a.harga, stock = _a.stock;
    if (nama === "" ||
        nama === undefined ||
        deskripsi === "" ||
        deskripsi === undefined ||
        harga === undefined ||
        harga === null ||
        stock === undefined ||
        stock === null ||
        stock < 0) {
        res.status(400).send("isi nya tak boleh kosong");
    }
    next();
};
exports.validateProduct = validateProduct;
