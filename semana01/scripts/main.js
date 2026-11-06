// Seleciona o primeiro elemento h1 encontrado no documento HTML
const tituloPrincipal = document.querySelector("h1");

// Modifica o conteúdo de texto do elemento de forma dinâmica
tituloPrincipal.textContent = "Bem-vindo ao meu Site Dinâmico, Eduardo!";

// Exibe uma confirmação no Console do navegador
console.log(
  "O script JavaScript foi executado com sucesso e o DOM foi alterado!",
);

// Seleciona o span do ano atual e define o ano corrente de forma dinâmica
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

// Seleciona o parágrafo da última modificação e insere a data do sistema
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Última Modificação: ${document.lastModified}`;
