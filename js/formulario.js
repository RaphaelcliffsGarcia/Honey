const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l'style='grid-column:1/-1; padding:1rem;border-radious=4px;background:#f7f7f7'> <span style=color:'#317a00;'>Mensagem enviada </span> Respondemos em 24h</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l'style='grid-column:1/-1; padding:1rem;border-radious=4px;background:#f7f7f7'> <span style='color:#E00;'>Erro no envio </span>, você pode enviar diretamente para o nosso email contato@email.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefaut();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
