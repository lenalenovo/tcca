const { Router } = require("express");
const router = Router();

// Importar as funções (processamento da requisição) do controller
const {
  listPosts,
  storePost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get("/posts", listPosts);
router.post("/post/create", storePost);
// editar o post:
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

module.exports = router;
