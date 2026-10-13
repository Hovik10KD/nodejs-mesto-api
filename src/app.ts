// Использован АI для быстрой настройки скриптов в package.json.
// Команда start отличается от описания в задаче
// т.к. у нас обе команды "start"/"dev" запускали не скомполированный код.

import express from 'express';
import mongoose from 'mongoose';

import errorHandler from './middlewares/error-handler';
import usersRouter from './routes/users';

const { PORT = 3000, MONGODB_URI = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', usersRouter);

app.use(errorHandler);

mongoose.connect(MONGODB_URI);
app.listen(PORT);
