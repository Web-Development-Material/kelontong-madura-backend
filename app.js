"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productRouter_ts_1 = require("./src/routes/productRouter.ts");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use("/api/warung_kelontong", productRouter_ts_1.productRouter);
app.listen(PORT, function () {
  console.log("Server running on port : ".concat(PORT));
});
