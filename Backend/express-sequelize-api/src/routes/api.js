import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as productController from '../controllers/product/product.controller';


const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.post('/changePassword', userController.changePassword);

router.post('/product', productController.createProduct);
router.get('/products', productController.allProducts);
router.patch('/product', productController.updateProduct);
router.get('/product/:id', productController.getProduct);

module.exports = router;