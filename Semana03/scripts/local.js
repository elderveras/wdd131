const temperatura = 9; // °C (Valência, Espanha)
const velocidadeVento = 12; // km/h

/**
 * Calcula a sensação térmica (wind chill) em graus Celsius (°C)
 * para temperatura <= 10 °C e velocidade do vento > 4.8 km/h.
 * @param {number} tempC - Temperatura em graus Celsius
 * @param {number} ventoKmh - Velocidade do vento em km/h
 * @returns {number} Sensação térmica arredondada a uma casa decimal
 */
function calcularSensacaoTermica(tempC, ventoKmh) {
  const sensacao =
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(ventoKmh, 0.16) +
    0.3965 * tempC * Math.pow(ventoKmh, 0.16);

  return Number(sensacao.toFixed(1));
}

function atualizarClima() {
  const elementoTemp = document.querySelector("#temperatura-valor");
  const elementoVento = document.querySelector("#vento-valor");
  const elementoSensacao = document.querySelector("#sensacao-termica");

  if (elementoTemp) {
    elementoTemp.textContent = String(temperatura);
  }

  if (elementoVento) {
    elementoVento.textContent = String(velocidadeVento);
  }

  if (elementoSensacao) {
    if (temperatura <= 10 && velocidadeVento > 4.8) {
      const resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
      elementoSensacao.textContent = `${resultado} °C`;
    } else {
      elementoSensacao.textContent = "N/A";
    }
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
  atualizarClima();
  atualizarRodape();
});
