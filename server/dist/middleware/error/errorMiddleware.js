"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddlewareController = void 0;
const errorMiddlewareController = (error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ error: error, message: message });
};
exports.errorMiddlewareController = errorMiddlewareController;
