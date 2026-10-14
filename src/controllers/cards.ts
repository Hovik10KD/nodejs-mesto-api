import { Request, Response } from 'express';

import Cards from '../models/cards';

const getCards = (_req: Request, res: Response) => {
  Cards.find({}).then((cards) => res.send({ data: cards }));
};

const createCard = (req: Request, res: Response) => {
  const { link, name } = req.body;
  const owner = req.user?._id;

  Cards.create({
    name,
    link,
    owner,
  })
    .then((card) => res.send(card))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const deleteCard = (req: Request, res: Response) => {
  const { id } = req.params;

  Cards.findByIdAndDelete(id)
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

export default { getCards, createCard, deleteCard };
