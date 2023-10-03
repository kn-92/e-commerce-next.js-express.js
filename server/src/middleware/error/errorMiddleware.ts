import { NextFunction, Request, Response } from "express";

export const errorMiddlewareController = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error, error.errorArray);
  const status = error.statusCode || 500;
  const message = error.message;
  const errors = error.errorArray;
  res.status(status).json({ message: message, errors: errors });
};
