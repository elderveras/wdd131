// Seleciona o primeiro elemento h1 encontrado no documento HTML
const tituloPrincipal = document.querySelector("h1");

// Modifica o conteúdo de texto do elemento de forma dinâmica
tituloPrincipal.textContent = "Bem-vindo ao meu Site Dinâmico, Eduardo!";

// Exibe uma confirmação no Console do navegador
console.log(
  "O script JavaScript foi executado com sucesso e o DOM foi alterado!",
);

// Preenche o ano atual de forma dinâmica
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

// Preenche a data da última modificação do documento
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Última Modificação: ${document.lastModified}`;
