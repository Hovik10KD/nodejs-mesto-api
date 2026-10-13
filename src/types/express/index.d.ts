// Расширение типа сделано с помошю АI

import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: string;
      };
    }
  }
}

export {};
