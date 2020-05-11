import { Joi } from 'express-validation';

// User validations
const userValidation = {
  body: Joi.object({
    firstName: Joi.string().regex(/^[A-Za-z]+$/).min(3).max(30).required(),
    lastName: Joi.string().regex(/^[A-Za-z]+$/).min(3).max(30).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('admin', 'partner').required(),
    status: Joi.string().valid('active', 'inactive').required()
  })
}

export {
  userValidation
};