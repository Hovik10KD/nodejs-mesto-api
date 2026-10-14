import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import usersController from '../controllers/users';

const router = Router();

router.get('/', usersController.getUsers);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(200).required(),
      avatar: Joi.string().uri().required(),
    }),
  }),
  usersController.createUser,
);

router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(200).required(),
    }),
  }),
  usersController.updateProfile,
);

router.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().uri().required(),
    }),
  }),
  usersController.updateProfileAvatar,
);

router.get(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().hex().length(24).required(),
    }),
  }),
  usersController.getUserById,
);

export default router;
