const formulario = document.querySelector("form");
const saida1 = document.querySelector("#outSaida1");
const saida2 = document.querySelector("#outSaida2");

formulario.addEventListener("submit", (event) => {
  let medicamento = formulario.inMedicamento.value;
  let preco = Number(formulario.inPreco.value);
  let leve2 = preco + preco;
  let precoDesconto = Math.floor(leve2);

  saida1.innerHTML = `Promoção de ${medicamento}`;
  saida2.innerHTML = `Leve 2 por apenas R$: ${precoDesconto}`;
  console.log(
    `Preco: ${preco}, desconto: ${precoDesconto}, Produto: ${medicamento}, leve 2: ${leve2.toFixed(2)}`,
  );
  event.preventDefault();
});
