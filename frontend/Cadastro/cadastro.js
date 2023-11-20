//const { response } = require("../../backend/src/app");

let tipoUsuario = "Pessoa";
let nome = null;
let usuario = null;
let email = null;
let endereco= null;
let senha = null;
let confirmSenha = null;

async function cadastrar() {
   endereco = document.getElementById("endereco").value;

  if (endereco === null || endereco === "") {
    tipoUsuario = "Pessoa";
  } else {
    tipoUsuario = "Empresa";
  }


  if (tipoUsuario === "Pessoa") {
    nome = document.getElementById("nome_c").value;
    usuario = document.getElementById("usuario_c").value;
    email = document.getElementById("email_c").value;
    senha = document.getElementById("senha_c").value;
    confirmSenha = document.getElementById("confirmSenha_c").value;
  } else {
    nome = document.getElementById("nome").value;
    usuario = document.getElementById("usuario").value;
    email = document.getElementById("email").value;
    endereco = document.getElementById("endereco").value;
    senha = document.getElementById("senha").value;
    confirmSenha = document.getElementById("confirmSenha").value;
  }

  //validar senhas iguais
  if (senha != confirmSenha) {
    alert("os dados da senha não são iguais!");
    return;
  } else {
    alert("as senhas correspondem!");
  }

  document.getElementById("endereco").value = null;

  // console.log(nome);
  // console.log(usuario);
  // console.log(senha);
  // console.log(email);
  // console.log(endereco);
  // console.log(confirmSenha);
  // console.log(tipoUsuario);

  const data = {
    nome,
    usuario,
    senha,
    email,
    endereco,
    tipoUsuario,
  };
  //const response =
  await fetch("http://localhost:3002/api/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async(res) => {
      const resposta = (await res.json());
      // alert("certo");
      console.log(resposta)
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("endereco", endereco);
      localStorage.setItem("email", email);
      localStorage.setItem("nome", nome);
      localStorage.setItem("tipoUsuario", tipoUsuario);
      localStorage.setItem("id", resposta.data.id);

      

      window.location.href = "http://127.0.0.1:5500/frontend/home/index.html";
    })
    .catch((err) => {
      console.log(err);
      alert("Não foi possível, usuário já existente!")
    });
}