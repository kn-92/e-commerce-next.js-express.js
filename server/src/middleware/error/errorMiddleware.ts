import type { ErrorRequestHandler } from "express";

export const errorMiddlewareController: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ error: error, message: message });
};
