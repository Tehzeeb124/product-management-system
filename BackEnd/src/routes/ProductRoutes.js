const express=require('express');
const router=express.Router();
const productController=require('../controllers/ProductController');
router.get('/', productController.getAllProducts);
// POST request ke liye
router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
module.exports=router;