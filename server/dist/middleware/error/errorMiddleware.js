"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddlewareController = void 0;
const errorMiddlewareController = (error, req, res, next) => {
    console.log(error, error.errorArray);
    const status = error.statusCode || 500;
    const message = error.message;
    const errors = error.errorArray;
    res.status(status).json({ message: message, errors: errors });
};
exports.errorMiddlewareController = errorMiddlewareController;
