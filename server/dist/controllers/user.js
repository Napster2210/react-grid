"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
exports.default = {
    create: (req, res, _next) => {
        const { firstName, lastName, email, role, status } = req.body;
        console.log(firstName);
        // Create a User
        const user = new user_1.default({
            firstName,
            lastName,
            role,
            email,
            status
        });
        // Save Note in the database
        user.save()
            .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while creating the User."
            });
        });
    }
};
//# sourceMappingURL=user.js.map