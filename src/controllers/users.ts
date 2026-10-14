import { NextFunction, Request, Response } from 'express';

import Users from '../models/users';
import NotFoundError from '../errors/not-found-error';

const getUsers = (_req: Request, res: Response, next: NextFunction) => {
  Users.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

const getUserById = (req: Request, res: Response, next: NextFunction) => {
  Users.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }

      res.send({ data: user });
    })
    .catch(next);
};

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, about, avatar } = req.body;

  Users.create({
    name,
    about,
    avatar,
  })
    .then((user) => res.send(user))
    .catch(next);
};

const updateProfile = (req: Request, res: Response, next: NextFunction) => {
  const { name, about } = req.body;
  const authUserId = req.user?._id;

  Users.findByIdAndUpdate(
    authUserId,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }

      res.send(user);
    })
    .catch(next);
};

const updateProfileAvatar = (req: Request, res: Response, next: NextFunction) => {
  const { avatar } = req.body;
  const authUserId = req.user?._id;

  Users.findByIdAndUpdate(
    authUserId,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }

      res.send(user);
    })
    .catch(next);
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateProfileAvatar,
};
