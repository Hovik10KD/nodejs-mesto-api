import express from 'express';
import mongoose from 'mongoose';
import { errors } from 'celebrate';

import errorHandler from './middlewares/error-handler';
import mockAuthUser from './middlewares/mock-auth-user';

import usersRouter from './routes/users';
import cardsRouter from './routes/cards';

const { PORT = 3000, MONGODB_URI = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

app.use(mockAuthUser);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use(errors());
app.use(errorHandler);

mongoose.connect(MONGODB_URI);
app.listen(PORT);
