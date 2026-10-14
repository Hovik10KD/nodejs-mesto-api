import { Router } from 'express';

import cardsController from '../controllers/cards';

const router = Router();

router.get('/', cardsController.getCards);
router.post('/', cardsController.createCard);
router.delete('/:id', cardsController.deleteCard);

export default router;
