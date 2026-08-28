const formulario = document.querySelector("form");
const resposta = document.getElementById("outResp");

formulario.addEventListener("submit", (e) => {
  let valorMinutos = Number(formulario.inMinutos.value);
  let valorTempo = Number(formulario.inTempo.value);
  let tempoDividido = Math.ceil(valorTempo / 15);
  let valorPagar = Math.ceil(valorMinutos * tempoDividido);

  resposta.innerText = `Valor a Pagar: ${valorPagar.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
  e.preventDefault();
});
