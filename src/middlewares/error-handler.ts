// .eslintrc обновлен с помошю AI для поддержки _req, _next

import { Request, Response, NextFunction } from 'express';

import ERROR_CODES from '../constants/errors';
import type { IError } from '../types/error';

const errorHandler = (
  err: IError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { statusCode = ERROR_CODES.INTERNAL_SERVER_ERROR, message = '' } = err;

  res.status(statusCode).send({
    message:
      statusCode === ERROR_CODES.INTERNAL_SERVER_ERROR
        ? 'Internal Server Error'
        : message,
  });
};

export default errorHandler;
