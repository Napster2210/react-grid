"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const userValidation = {
    body: express_validation_1.Joi.object({
        firstName: express_validation_1.Joi.string().regex(/^[A-Za-z]+$/).min(3).max(30).required(),
        lastName: express_validation_1.Joi.string().regex(/^[A-Za-z]+$/).min(3).max(30).required(),
        email: express_validation_1.Joi.string().email().required(),
        role: express_validation_1.Joi.string().valid('admin', 'partner').required(),
        status: express_validation_1.Joi.string().valid('active', 'inactive').required()
    })
};
exports.userValidation = userValidation;
//# sourceMappingURL=user.js.map