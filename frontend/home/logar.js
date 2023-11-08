async function logar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  console.log(email);
  console.log(senha);

  const data = {
    email,
    senha,
  };
  console.log(data);

  fetch("http://localhost:3002/api/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.data[0].tipo_usuario);
      alert(data.message);
      localStorage.setItem("tipoUsuario", data.data[0].tipo_usuario);
      window.location.href =
        "http://127.0.0.1:5500/projeto_tcc-main/frontend/home/index.html";
    });
}
