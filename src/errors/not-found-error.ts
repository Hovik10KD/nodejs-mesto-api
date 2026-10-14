import ERROR_CODES from '../constants/errors';

class NotFoundError extends Error {
  readonly statusCode = ERROR_CODES.NOT_FOUND;
}

export default NotFoundError;
