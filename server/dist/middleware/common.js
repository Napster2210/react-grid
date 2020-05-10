"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
exports.handleCors = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
//# sourceMappingURL=common.js.map