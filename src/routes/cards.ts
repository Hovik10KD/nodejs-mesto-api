import { Router } from 'express';

import cardsController from '../controllers/cards';

const router = Router();

router.get('/', cardsController.getCards);
router.post('/', cardsController.createCard);
router.delete('/:cardId/likes', cardsController.unlikeCard);
router.put('/:cardId/likes', cardsController.likeCard);
router.delete('/:id', cardsController.deleteCard);

export default router;
