// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require("express");
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require("dotenv").config();
const cors = require("cors");

// Instanciar o express na variável app
const app = express();

app.use(express.json());
app.use(cors());

// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
app.set("port", process.env.SERVER_PORT || 3005);

// Importar as rotas para serem executadas na aplicação
const usersRouter = require("./routes/usersRouter");
const loginRouter = require("./routes/loginRouter");
const postsRouter = require("./routes/postsRouter");
const likeRouter = require("./routes/likeRouter");
// Habilitar as rotas na aplicação
app.use("/api", usersRouter);
app.use("/api/auth", loginRouter);
app.use("/api", postsRouter);
app.use("/api", likeRouter);

module.exports = app;
