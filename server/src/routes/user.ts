import express from 'express';
import { validate } from 'express-validation';
import { userValidation } from '../validations/user';
import userController from '../controllers/user';
import { applyMiddleware } from '../utils/helper';
import middleware from '../middleware';

const router = express.Router();
applyMiddleware(middleware, router);


router.get('/', (_req, res, _next) => {
  res.send('User: respond with a resource');
});

router.post('/create', validate(userValidation, {}, {}), userController.create);

export default router;
