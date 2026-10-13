import { Router } from 'express';

import usersController from 'controllers/users';

const router = Router();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);

export default router;
