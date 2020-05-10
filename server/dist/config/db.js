"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.default = {
    connect: () => {
        // MongoDB Connection
        console.log('Connecting database...');
        mongoose_1.default.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose_1.default.connection;
        db.on("error", () => {
            console.log("> error occurred while connecting the database!");
        });
        db.once("open", () => {
            console.log("> successfully connected the database!");
        });
    }
};
//# sourceMappingURL=db.js.map