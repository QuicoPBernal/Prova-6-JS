const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const calcularButton = document.getElementById("calcular");
const resultadoParagrafo = document.getElementById("resultado");
calcularButton.addEventListener("click", () => {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);
  if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    resultadoParagrafo.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  } else {
    resultadoParagrafo.textContent = "Por favor, insira valores válidos para peso e altura.";
  }
});
