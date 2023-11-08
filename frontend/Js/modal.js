const abreModalBotao = document.querySelector("#modalLoginCadastro");
const fechaModalBotao = document.querySelector("#fechaModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal=(indice, indiceFade)=>{
  if(indice){
    console.log(indiceFade)
    const novoModal = document.querySelectorAll("#"+indice)[0];
    const novoFade = document.querySelectorAll("#"+ indiceFade)[0];
    
    [novoModal, novoFade].forEach((element)=>element.classList.toggle("hide"));
    return
  }
  else{
    [modal, fade].forEach((element)=>element.classList.toggle("hide"));
  }
}