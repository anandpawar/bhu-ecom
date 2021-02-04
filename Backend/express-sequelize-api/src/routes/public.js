import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post(
    '/login',
    userController.login,
);
router.post(
    '/register',
    userController.register,
);

module.exports = router;