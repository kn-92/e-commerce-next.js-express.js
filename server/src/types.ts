import { ValidationError } from "express-validator";

export interface MiddlewareError extends Error {
  statusCode?: number | undefined;
  errorsArray?: ValidationError[] | undefined;
}
