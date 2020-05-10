"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const user_1 = __importDefault(require("./routes/user"));
const express_validation_1 = require("express-validation");
const db_1 = __importDefault(require("./config/db"));
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(morgan_1.default('dev'));
app.use('/users', user_1.default);
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
// catch 404 and forward to error handler
app.use((_req, _res, next) => {
    next(http_errors_1.default(404));
});
// error handler
app.use((err, _req, res, _next) => {
    console.log('Error', err);
    if (err instanceof express_validation_1.ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json(err);
});
app.listen(PORT, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`server is listening on ${PORT}`);
    db_1.default.connect();
    return true;
});
//# sourceMappingURL=app.js.map