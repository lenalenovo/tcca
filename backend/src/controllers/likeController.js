const connection = require("../config/db");


async function listlike(request, response) {
  // Preparar o comando de execução no banco
  
  connection.query("SELECT COUNT(*) AS qtd FROM likes WHERE id_post = ?", [request.params.id_post],(err, results) => {
    try {
      // Tenta retornar as solicitações requisitadas
      if (results) {
        // Se tiver conteúdo
        response.status(200).json({
          success: true,
          message: "Retorno de likes com sucesso!",
          data: results,
        });
      } else {
        // Retorno com informações de erros
        response.status(400).json({
          success: false,
          message: `Não foi possível retornar os likes.`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que cria um novo usuário
async function storelike(request, response) {
  // Preparar o comando de execução no banco
  const query =
    "INSERT INTO like(id_usuario, id_post) VALUES(?, ?);";

  // Recuperar os dados enviados na requisição
  const params = Array(
    request.body.id_usuario,
    request.body.id_post
  );

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(201).json({
          success: true,
          message: `Sucesso!`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível, verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que atualiza o usuário no banco
// async function updatePost(request, response) {
//   // Preparar o comando de execução no banco
//   const query = "UPDATE posts SET `concluido` = ? WHERE `id` = ?";

//   // Recuperar os dados enviados na requisição respectivamente
//   const params = Array(
//     request.body.concluido,
//     request.params.id // Recebimento de parametro da rota
//   );

//   // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
//   connection.query(query, params, (err, results) => {
//     try {
//       if (results) {
//         response.status(200).json({
//           success: true,
//           message: `Sucesso! Post atualizado.`,
//           data: results,
//         });
//       } else {
//         response.status(400).json({
//           success: false,
//           message: `Não foi possível realizar a atualização. Verifique os dados informados`,
//           query: err.sql,
//           sqlMessage: err.sqlMessage,
//         });
//       }
//     } catch (e) {
//       // Caso aconteça algum erro na execução
//       response.status(400).json({
//         succes: false,
//         message: "Ocorreu um erro. Não foi possível atualizar o post!",
//         query: err.sql,
//         sqlMessage: err.sqlMessage,
//       });
//     }
//   });
// }

// // Função que remove usuário no banco
// async function deletePost(request, response) {
//   // Preparar o comando de execução no banco
//   const query = "DELETE FROM posts WHERE `id` = ?";

//   // Recebimento de parametro da rota
//   const params = Array(request.params.id);

//   // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
//   connection.query(query, params, (err, results) => {
//     try {
//       if (results) {
//         response.status(200).json({
//           success: true,
//           message: `Sucesso! Post deletado.`,
//           data: results,
//         });
//       } else {
//         response.status(400).json({
//           success: false,
//           message: `Não foi possível realizar a remoção. Verifique os dados informados`,
//           query: err.sql,
//           sqlMessage: err.sqlMessage,
//         });
//       }
//     } catch (e) {
//       // Caso aconteça algum erro na execução
//       response.status(400).json({
//         succes: false,
//         message: "Ocorreu um erro. Não foi possível deletar o post!",
//         query: err.sql,
//         sqlMessage: err.sqlMessage,
//       });
//     }
//   });
// }

module.exports = {
  listlike,
  storelike,
};
