// WDD 131 - Semana 02/04: Álbum de Templos (JavaScript) //

// 1. Preenche o ano atual de forma dinâmica no rodapé
const currentyear = document.querySelector("#currentyear");
if (currentyear) {
  currentyear.textContent = new Date().getFullYear();
}

// 2. Preenche a data da última modificação do documento no rodapé
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Última Modificação: ${document.lastModified}`;
}

// 3. ARRAY DE TEMPLOS (Base de dados para renderização e filtros futuros)
const temples = [
  {
    templeName: "Brasília Brasil",
    location: "Brasília, Distrito Federal, Brasil",
    dedicated: "17 de setembro de 2023",
    area: 25000,
    imageUrl: "imagens/brasilia-brazil-temple.jpg",
  },
  {
    templeName: "Idaho Falls Idaho",
    location: "Idaho Falls, Idaho, Estados Unidos",
    dedicated: "23 de setembro de 1945",
    area: 116242,
    imageUrl: "imagens/idaho-falls-idaho-temple.jpg",
  },
  {
    templeName: "Kona Havai",
    location: "Kailua-Kona, Havai, Estados Unidos",
    dedicated: "23 de janeiro de 2000",
    area: 10700,
    imageUrl: "imagens/kona-hawaii-temple.jpg",
  },
  {
    templeName: "Lisboa Portugal",
    location: "Lisboa, Portugal",
    dedicated: "15 de setembro de 2019",
    area: 23730,
    imageUrl: "imagens/lisbon-portugal-temple.jpg",
  },
  {
    templeName: "Madrid Espanha",
    location: "Madrid, Espanha",
    dedicated: "19 de março de 1999",
    area: 45800,
    imageUrl: "imagens/madrid-spain-temple.jpg",
  },
  {
    templeName: "Oakland Califórnia",
    location: "Oakland, Califórnia, Estados Unidos",
    dedicated: "17 de novembro de 1964",
    area: 80157,
    imageUrl: "imagens/oakland-california-temple.jpg",
  },
  {
    templeName: "Orlando Flórida",
    location: "Orlando, Flórida, Estados Unidos",
    dedicated: "9 de outubro de 1994",
    area: 70000,
    imageUrl: "imagens/orlando-florida-temple.jpg",
  },
  {
    templeName: "Palmyra Nova Iorque",
    location: "Palmyra, Nova Iorque, Estados Unidos",
    dedicated: "6 de abril de 2000",
    area: 10700,
    imageUrl: "imagens/palmyra-new-york-temple.jpg",
  },
  {
    templeName: "Recife Brasil",
    location: "Recife, Pernambuco, Brasil",
    dedicated: "15 de dezembro de 2000",
    area: 37200,
    imageUrl: "imagens/recife-brazil-temple.jpg",
  },
  {
    templeName: "Roma Itália",
    location: "Roma, Itália",
    dedicated: "10 de março de 2019",
    area: 40100,
    imageUrl: "imagens/rome-italy-temple.jpg",
  },
];

// FUNÇÃO DE RENDERIZAÇÃO DOS CARTÕES DE TEMPLOS
function createTempleCard(filteredTemples) {
  const main = document.querySelector("main");

  // Limpa o conteúdo atual da área principal (mantendo o h2 ou recriando-o)
  main.innerHTML = `<h2>Álbum de Templos</h2>`;

  filteredTemples.forEach((temple) => {
    let card = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `Templo de ${temple.templeName}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    let figcaption = document.createElement("figcaption");
    // Modificação aplicada aqui: labels em português e formatação regional pt-BR
    figcaption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      Localização: ${temple.location}<br>
      Dedicado em: ${temple.dedicated}<br>
      Área: ${temple.area.toLocaleString("pt-BR")} pés²
    `;

    card.appendChild(img);
    card.appendChild(figcaption);
    main.appendChild(card);
  });
}

// Executa a função para exibir todos os templos ao carregar a página
createTempleCard(temples);

// FILTROS DO MENU DE NAVEGAÇÃO
const homeLink = document.querySelector("nav a:nth-child(1)");
const oldLink = document.querySelector("nav a:nth-child(2)");
const newLink = document.querySelector("nav a:nth-child(3)");
const largeLink = document.querySelector("nav a:nth-child(4)");
const smallLink = document.querySelector("nav a:nth-child(5)");

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  // Nota: Como as datas agora estão escritas em formato por extenso ("17 de setembro de 2023"),
  // a extração de anos baseada em split(",") precisa de ajuste para não quebrar a lógica de datas antigas/novas.
  let oldTemples = temples.filter((temple) => {
    let year = parseInt(temple.dedicated.split(" ").pop());
    return year < 1900;
  });
  createTempleCard(oldTemples);
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  let newTemples = temples.filter((temple) => {
    let year = parseInt(temple.dedicated.split(" ").pop());
    return year > 2000;
  });
  createTempleCard(newTemples);
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  let largeTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCard(largeTemples);
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  let smallTemples = temples.filter((temple) => temple.area < 50000);
  createTempleCard(smallTemples);
});
