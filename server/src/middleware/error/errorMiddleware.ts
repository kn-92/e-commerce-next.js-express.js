import { NextFunction, Request, Response } from "express";

export const errorMiddlewareController = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ error: error, message: message });
};
