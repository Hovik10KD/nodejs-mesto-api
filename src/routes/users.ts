import { Router } from 'express';

import usersController from '../controllers/users';

const router = Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.patch('/me', usersController.updateProfile);
router.patch('/me/avatar', usersController.updateProfileAvatar);
router.get('/:id', usersController.getUserById);

export default router;
