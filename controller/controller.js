const Projects = require("../database.js");

const getAllProducts = (req, res, next) => {
    res.json(Projects);
};

const newProductForm = (req, res, next) => {
    res.send("form to upload");
};

const handleNewProduct = (req, res, next) => {
    res.send("uploaded succesfully");
};                                              
const deleteProduct=(req,res,next)=>{
    const id=req.params.id
    const myquery=req.query
    // res.send(id)
    res.json({myquery,id});
}

module.exports = { getAllProducts, newProductForm, handleNewProduct,deleteProduct };
