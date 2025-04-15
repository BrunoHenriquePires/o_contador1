let valor = 0;
const contador = document.getElementById("contador");
const botoes = document.querySelectorAll("button");

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("aumentar")) {
      valor++;
    } else if (btn.classList.contains("diminuir")) {
      valor--;
    } else {
      valor = 0;
    }
    contador.textContent = valor;
  });
});
