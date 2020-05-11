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

// Retrieve a single User with userId
router.get('/:userId', userController.findOne);

// Update a User with userId
router.put('/:userId', validate(userValidation, {}, {}), userController.update);

// Delete a User with userId
router.delete('/:userId', userController.delete);

export default router;
