const registros = [
  {
    nome: "Templo do Recife Brasil",
    localizacao: "Recife, Pernambuco",
    ano: 2000,
    area: 37200,
    imagem: "imagens/templo-recife.webp",
  },
  {
    nome: "Templo de São Paulo Brasil",
    localizacao: "São Paulo, São Paulo",
    ano: 1978,
    area: 59246,
    imagem: "imagens/templo-sao-paulo.webp",
  },
  {
    nome: "Templo de Fortaleza Brasil",
    localizacao: "Fortaleza, Ceará",
    ano: 2019,
    area: 36000,
    imagem: "imagens/templo-fortaleza.webp",
  },
  {
    nome: "Templo de Lisboa Portugal",
    localizacao: "Lisboa, Portugal",
    ano: 2019,
    area: 23730,
    imagem: "imagens/templo-lisboa.webp",
  },
  {
    nome: "Templo de Madri Espanha",
    localizacao: "Madri, Espanha",
    ano: 1999,
    area: 45800,
    imagem: "imagens/templo-madri.webp",
  },
];

function renderizarTabela() {
  const corpoTabela = document.querySelector("#corpo-tabela");
  const celulaTotalArea = document.querySelector("#area-total");

  if (!corpoTabela) return;

  corpoTabela.innerHTML = "";
  let somaArea = 0;

  registros.forEach((item) => {
    somaArea += item.area;

    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = item.nome;

    const tdLocal = document.createElement("td");
    tdLocal.textContent = item.localizacao;

    const tdAno = document.createElement("td");
    tdAno.textContent = String(item.ano);
    tdAno.classList.add("numero-coluna");

    const tdArea = document.createElement("td");
    tdArea.textContent = item.area.toLocaleString("pt-BR");
    tdArea.classList.add("numero-coluna");

    const tdImagem = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.imagem;
    img.alt = `Vista do ${item.nome}`;
    img.width = 120;
    img.height = 80;
    img.loading = "lazy";
    img.classList.add("miniatura-tabela");
    tdImagem.appendChild(img);

    tr.appendChild(tdNome);
    tr.appendChild(tdLocal);
    tr.appendChild(tdAno);
    tr.appendChild(tdArea);
    tr.appendChild(tdImagem);

    corpoTabela.appendChild(tr);
  });

  if (celulaTotalArea) {
    celulaTotalArea.textContent = somaArea.toLocaleString("pt-BR");
  }
}

function atualizarRodape() {
  const elementoAno = document.querySelector("#ano-atual");
  const elementoModificacao = document.querySelector("#ultima-modificacao");

  if (elementoAno) {
    elementoAno.textContent = String(new Date().getFullYear());
  }

  if (elementoModificacao) {
    elementoModificacao.textContent = `Última modificação: ${document.lastModified}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarTabela();
  atualizarRodape();
});
