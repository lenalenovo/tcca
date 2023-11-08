async function logar() {
  let email = null;
  let senha = null;

  email = document.getElementById("email").value;
  senha = document.getElementById("senha").value;

  const data = {
    email,
    senha,
  };

  await fetch("http://localhost:3002/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
      alert("certo");
      window.location.href = "http://127.0.0.1:5500/frontend/home/index.html";
    })
    .catch((err) => {
      console.log(err);
    });
}
