const { Router } = require("express");
const router = Router();

// Importar as funções (processamento da requisição) do controller
const {
  updatelike,
  listlike,
  getLikes,
  storelike,
} = require("../controllers/likeController");

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get("/likes/:id_post", listlike);
router.post("/likes/create", storelike);
router.get("/likes/:id_post/:id_usuario", getLikes)
// editar o post:

module.exports = router;
