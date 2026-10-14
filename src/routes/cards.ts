import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import cardsController from '../controllers/cards';

const router = Router();

router.get('/', cardsController.getCards);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      link: Joi.string().uri({
        scheme: ['http', 'https'],
      }).required(),
    }),
  }),
  cardsController.createCard,
);

router.delete(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24).required(),
    }),
  }),
  cardsController.unlikeCard,
);

router.put(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24).required(),
    }),
  }),
  cardsController.likeCard,
);

router.delete(
  '/:cardId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24).required(),
    }),
  }),
  cardsController.deleteCard,
);

export default router;
