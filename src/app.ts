// Использован АI для быстрой настройки скриптов в package.json.
// Команда start отличается от описания в задаче
// т.к. у нас обе команды "start"/"dev" запускали не скомполированный код.

import express from 'express';
import mongoose from 'mongoose';

const { PORT = 3000, MONGODB_URI = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

mongoose.connect(MONGODB_URI);
app.listen(PORT);
