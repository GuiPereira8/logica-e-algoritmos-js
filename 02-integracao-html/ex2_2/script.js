//Criando referência ao formulário e aos elementos h3 e h4 (aa saidaa que será exibidas as respostas)
const areaForm = document.querySelector("form");
const saida1 = document.querySelector("h3");
const saida2 = document.querySelector("h4");

//Cria um "ouvinte" de evento, acionado quando o botão submit for clicado.
areaForm.addEventListener("submit", (e) => {
  const title = areaForm.inTitulo.value; //obtém conteúdo dos campos input
  const duracao = Number(areaForm.inDuracao.value);

  const horas = Math.floor(duracao / 60); //arredonda para baixo resultado
  const minutos = duracao % 60; //obtém o resto da divisão

  saida1.innerHTML = title; //exibe as respostas
  saida2.innerHTML = `${horas} hora(s) e ${minutos} minuto(s)`;
  e.preventDefault(); // evita envio do formulário
});
