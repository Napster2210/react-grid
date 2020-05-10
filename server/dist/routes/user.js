"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validation_1 = require("express-validation");
const user_1 = require("../validations/user");
const user_2 = __importDefault(require("../controllers/user"));
const helper_1 = require("../utils/helper");
const middleware_1 = __importDefault(require("../middleware"));
const router = express_1.default.Router();
helper_1.applyMiddleware(middleware_1.default, router);
router.get('/', (_req, res, _next) => {
    res.send('User: respond with a resource');
});
router.post('/create', express_validation_1.validate(user_1.userValidation, {}, {}), user_2.default.create);
exports.default = router;
//# sourceMappingURL=user.js.map