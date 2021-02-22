const Projects = require("../database.js");

const getAllProducts = (req, res, next) => {
    res.json(Projects);
};

const newProductForm = (req, res, next) => {
    res.send("form to upload");
};

module.exports = { getAllProducts, newProductForm, handleNewProduct };
