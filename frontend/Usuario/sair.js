


const logoutBtn = document.querySelector(".logout")

logoutBtn.addEventListener("click", ()=>{
    window.location.replace("../home/index.html")
    localStorage.removeItem('tipoUsuario')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('endereco')
    localStorage.removeItem('usuario')
});

tipoUsuario = localStorage.getItem("tipoUsuario");

if (tipoUsuario === "Empresa") {
  const tituloEnderecoH = document.getElementById("tituloEndereco");
  tituloEnderecoH.classList.remove("hidden");
  const textoEnderecoH = document.getElementById("textoEndereco");
  textoEnderecoH.classList.remove("hidden");
}

usuario = localStorage.getItem("usuario");
endereco = localStorage.getItem("endereco");
email = localStorage.getItem("email");
tipoUsuario = localStorage.getItem("tipoUsuario");

// console.log(usuario)
// console.log(endereco)
// console.log(email)

const textoUsuario = document.getElementById("textoUsuario")
textoUsuario.innerText = usuario

const textoEmail = document.getElementById("textoEmail")
textoEmail.innerText = email

const textoEndereco = document.getElementById("textoEndereco")
textoEndereco.innerText = endereco
