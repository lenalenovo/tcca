tipoUsuario = localStorage.getItem("tipoUsuario");

if (tipoUsuario === "Empresa") {
  const imgEscrever = document.getElementById("btnEscrever");
  imgEscrever.classList.remove("hidden");
}

async function postar() {



}

async function getPosts () {

    const response = fetch('UTL_API/posts', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then(console.log(response.data.data)

    )
    .catch()

}
