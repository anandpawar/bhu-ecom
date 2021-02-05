import express from 'express';
import * as userController from '../controllers/user/user.controller';
import * as productController from '../controllers/product/product.controller';

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/users', userController.allUsers);
router.patch('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;