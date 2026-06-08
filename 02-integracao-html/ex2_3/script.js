// Cria referência ao form e aos elementos de reposta (pelo seu id)
const frm = document.querySelector("form");
const saida1 = document.querySelector("#outResp1");
const saida2 = document.querySelector("#outResp2");
const saida3 = document.querySelector("#outResp3");

// Criando um "ouvinte" que executará uma função ao ser clicado.

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value;
  const preco = Number(frm.inPreco.value);

  const entrada = preco * 0.5;
  const parcela = (preco * 0.5) / 12;

  saida1.innerHTML = `Promoção: ${veiculo}`;
  saida2.innerHTML = `Entrada de R$: ${entrada.toFixed(2)}`;
  saida3.innerHTML = `+12x de ${parcela.toFixed(2)}`;
  e.preventDefault(); // evita o envio do formulário
});
