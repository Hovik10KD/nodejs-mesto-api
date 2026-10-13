// Использован АI для быстрой настройки скриптов в package.json.
// Команда start отличается от описания в задаче т.к. у нас обе команды "start"/"dev" запускали не скомполированный код.

import express from "express";
import type { Request, Response } from "express";

const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
