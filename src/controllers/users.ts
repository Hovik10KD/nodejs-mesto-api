import { Request, Response } from 'express';

import Users from '../models/users';

const getUsers = (_req: Request, res: Response) => {
  Users.find({}).then((users) => res.send({ data: users }));
};

const getUserById = (req: Request, res: Response) => {
  Users.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const createUser = (req: Request, res: Response) => {
  const { name, about, avatar } = req.body;

  Users.create({
    name,
    about,
    avatar,
  })
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const updateProfile = (req: Request, res: Response) => {
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
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const updateProfileAvatar = (req: Request, res: Response) => {
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
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateProfileAvatar,
};
