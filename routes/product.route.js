const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');


router.get('/', getProducts);
router.get('/:id', getProducts);

router.post('/', createProduct);
 
// mettre à jour un produit
router.put('/:id', updateProduct);

// supprimer un produit
router.delete('/:id', deleteProduct);






module.exports = router;