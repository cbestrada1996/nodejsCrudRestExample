import * as Auth from '../http/middlewares/AuthMiddleware'
import ItemController from '../http/controllers/ItemController'
import ItemValidator from '../http/validators/ItemValidator'
import express = require('express');

export const router = express.Router();
const itemController = new ItemController();


router.use(Auth.authMiddleware)
router.get('/all', itemController.all); 
router.post('/create', ItemValidator.create(),itemController.create) 

module.exports = router;
