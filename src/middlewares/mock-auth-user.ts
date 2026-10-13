import { Request, Response, NextFunction } from 'express';

const mockAuthUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  req.user = {
    _id: '6ace6ce812cbf3bf771c4457',
  };

  next();
};

export default mockAuthUser;
