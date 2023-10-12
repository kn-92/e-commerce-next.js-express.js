"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth/auth"));
const errorMiddleware_1 = require("./middleware/error/errorMiddleware");
const PORT = process.env.PORT;
const URI = process.env.DATABASE_STRING;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use("/auth", auth_1.default);
app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint doesn't exist!" });
    next();
});
app.use(errorMiddleware_1.errorMiddlewareController);
mongoose_1.default
    .connect(URI)
    .then(() => {
    app.listen(PORT || 5000, () => {
        console.log(`Database connected! Server is running on PORT: ${PORT} `);
    });
})
    .catch((error) => console.log(error));
