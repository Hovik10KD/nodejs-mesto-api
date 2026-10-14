import { Request, Response, NextFunction } from 'express';

import Cards from '../models/cards';
import NotFoundError from '../errors/not-found-error';

const getCards = (_req: Request, res: Response, next: NextFunction) => {
  Cards.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

const createCard = (req: Request, res: Response, next: NextFunction) => {
  const { link, name } = req.body;
  const owner = req.user?._id;

  Cards.create({
    name,
    link,
    owner,
  })
    .then((card) => {
      res.send(card);
    })
    .catch(next);
};

const deleteCard = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  Cards.findByIdAndDelete(id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Card not found');
      }

      res.send(card);
    })
    .catch(next);
};

const likeCard = (req: Request, res: Response, next: NextFunction) => {
  const { cardId } = req.params;
  const authUserId = req.user?._id;

  Cards.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: authUserId } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Card not found');
      }

      res.send(card);
    })
    .catch(next);
};

const unlikeCard = (req: Request, res: Response, next: NextFunction) => {
  const { cardId } = req.params;
  const authUserId = req.user?._id;

  Cards.findByIdAndUpdate(
    cardId,
    { $pull: { likes: authUserId } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Card not found');
      }

      res.send(card);
    })
    .catch(next);
};

export default {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  unlikeCard,
};
