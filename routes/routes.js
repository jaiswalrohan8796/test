const express = require("express");
const productController = require("../controller/controller.js")
const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/upload", productController.newProductForm);

router.post("/new",productController.handleNewProduct)

router.get("/deleteProduct/:id",productController.deleteProduct)

module.exports = router;
