import express from 'express';
import { validate } from 'express-validation';
import { userValidation } from '../validations/user';
import userController from '../controllers/user';
import { applyMiddleware } from '../utils/helper';
import middleware from '../middleware';

const router = express.Router();
applyMiddleware(middleware, router);

// Create a new User
router.post('/create', validate(userValidation, {}, {}), userController.create);

 // Retrieve all Users
router.get('/', userController.findAll);



export default router;
