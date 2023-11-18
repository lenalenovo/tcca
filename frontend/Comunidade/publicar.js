

tipoUsuario = localStorage.getItem("tipoUsuario");

if (tipoUsuario === "Empresa") {
  const imgEscrever = document.getElementById("btnEscrever");
  imgEscrever.classList.remove("hidden");
}

usuario = localStorage.getItem("usuario");
endereco = localStorage.getItem("endereco");
email = localStorage.getItem("email");
tipoUsuario = localStorage.getItem("tipoUsuario");
nome = localStorage.getItem("nome");

console.log(usuario)
console.log(endereco)
console.log(email)
console.log(nome)

const nomePostModal = document.getElementById("textoPublicar")
nomePostModal.innerText = nome

const usuarioPostModal = document.getElementById("enviadoPost")
usuarioPostModal.innerText = usuario

const enderecoPostModal = document.getElementById("localizacaoPost")
enderecoPostModal.innerText = endereco

const texto = document.getElementById("inputModalPostA").value;
console.log(texto)
const id_usuario = localStorage.getItem('id');

function acionar(){
  postar()
}


async function getPosts () {

    const response = await fetch("http://localhost:3002/api/posts", {
        method: 'GET'
    })
    .then(async(res) => {
      // const response = (await res.json());
      const posts = (await res.json()).data;


      console.log(posts)
      
      const feed = document.querySelector(".feed");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
      feed.innerHTML = '';
        posts.forEach(async(post) => {
        const listItem = document.createElement('li');
        listItem.id = post.id
         const response = await fetch(`http://localhost:3002/api/likes/${post.id}/${localStorage.getItem('id')}`,{
          method:'GET'
         })

          const likedata = (await response.json()).data;
         console.log(likedata)
      
        listItem.innerHTML = `
        <div class="postbox">
        <img src="../assets/ususariorosa.png" class="imagemUsuario">
        <p class="postboxTexto">${post.nome}</p>
        <p class="enviado">enviado por ${post.usuario}</p>
        <p class="textoCheck">meta não atingida</p>
        <p class="localizacao">${post.endereco}</p>
        <img  src="../assets/checkVazioCinza.png"class="checkVazio"/>
        <p class="conteudoTexto">${post.texto}</p>
        <div class="curtidas-campo">
            <p class="text-${post.id}" class="curtidasTexto">${post.qtd_likes}</p>
            <button class="button-${post.id}" id="botaoCurtida" ${likedata.length > 0  ? "disabled" : ""} onclick="curtir(${post.id})"> 
            <img class="curtida" src="../assets/coracaoroxovazio.png" />
            </button>
        </div>
        </div>`;
        feed.appendChild(listItem);})
    })
    // .then(console.log(response.data.data)

    // )
    .catch((err)=>{
      console.log(err);
    })

}
window.onload = getPosts;

async function postar() {

  const texto = document.getElementById("inputModalPostA").value;
  console.log(texto)
  

   const data ={
      texto,
      id_usuario
   }

   console.log(data.id_usuario)

   await fetch("http://localhost:3002/api/post/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async(res) => {
      console.log(await res.json());
      alert("certo");
      
      // localStorage.setItem("texto", texto);
      // localStorage.setItem("id_usuario");

      // setTimeout(() => {
      //   toggleModal('modalPost', 'fade-2'); // Fechar o modal após 2 segundos
      // }, 2000);
      location.reload()
    })
    .catch((err) => {
      console.log(err);
    });


}

document.querySelector("#botaoCurtida").addEventListener("click", curtir);
async function curtir(id){
  const data={
    id_usuario,
    id_post: id
  }
 
  console.log(data)

    fetch("http://localhost:3002/api/likes/create", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_post: id,
        id_usuario: localStorage.getItem('id')
      }),
    method: 'POST'
})
  .then(async(res) => {
  // const response = (await res.json());
  // const qtd_likes = (await res.json()).data;
  const result = await res.json();
  
  const botaoCurtida = document.getElementsByClassName(`button-${id}`)[0]
  const curtidasTexto = document.getElementsByClassName(`text-${id}`)[0]

  const likesResponse = await fetch(`http://localhost:3002/api/likes/${id}`, {
      method: 'GET'
  })

  const qtd_likes = (await likesResponse.json()).data[0].qtd;

  if(id_usuario){
    alert("Pode tentar cutir")
  }
  else{
    alert("é preciso que faça login¹")
  }

  if(tipoUsuario === "Empresa"){
      alert("seu tipo de usuário não pode curtir!")
  }
  else{
    console.log(qtd_likes)
      curtidasTexto.innerHTML = qtd_likes;
      botaoCurtida.disabled = true
      // curtidasTexto.value = parseInt(curtidasTexto.value) +1;
    
  }
  
})

    
.catch((err)=>{
    console.log(err)
})
}
