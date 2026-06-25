const formulario = document.querySelector("form");
const respSaida = document.querySelector("#outSaida");

formulario.addEventListener("submit", (frm) => {
  const quilo = Number(formulario.inQuilo.value);
  const consumo = Number(formulario.inConsumo.value);

  const valor = (quilo / 1000) * consumo;
  respSaida.innerHTML = `Valor a pagar R$: ${valor.toFixed(2)}`;

  frm.preventDefault();
});
