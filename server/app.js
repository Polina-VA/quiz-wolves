require("dotenv").config();
const express = require("express");
const path = require("path");
const serverConfig = require("./config/serverConfig");
// Импортируем роуты из отдельных файлов
const indexRouter = require("./routes/index.routes");
const PORT = process.env.PORT ?? 3000;


const app = express(); 

//конфигурация
serverConfig(app); 


//мaршрутизация
app.use("/api", indexRouter); 

app.listen(PORT, () => console.log(`listen port ${PORT}`)); // запускаем порт