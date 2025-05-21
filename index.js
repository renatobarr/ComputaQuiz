window.onload = () => {
  document.activeElement.blur();
};


document.addEventListener("DOMContentLoaded", () => {
  const elementos = Array.from(document.querySelectorAll("h1, h2"));
  let indexAtual = 0;

  elementos[indexAtual].focus();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      indexAtual = (indexAtual + 1) % elementos.length;
      elementos[indexAtual].focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      indexAtual = (indexAtual - 1 + elementos.length) % elementos.length;
      elementos[indexAtual].focus();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const foco = document.activeElement;
    if (foco.tagName === "H1") {
      alert("Você apertou ENTER no título!");
    } else if (foco.tagName === "H2") {
      alert("Você apertou ENTER no PRESS START!");
    }else{
        const elementos = Array.from(document.querySelectorAll("h1, h2"));
        let indexAtual = 1;
        elementos[indexAtual].focus();
        alert("Você apertou ENTER DIRETO");
    }
  }
});

  let contadorCliques = 0;
  document.addEventListener("click", () => {
    contadorCliques++;

    if (contadorCliques === 5) {
      alert("Você clicou 10 vezes!");
      contadorCliques = 0;
    }
  });
