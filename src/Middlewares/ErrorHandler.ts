import { ErrorRequestHandler } from 'express';

export default class ErrorHandler {
  public static handle: ErrorRequestHandler = (
    error,
    req,
    res,
    next,
  ) => {
    res.status(error.statusCode || 500).json({ message: error.message });
    next();
  };
}