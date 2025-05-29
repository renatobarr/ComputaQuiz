//window.onload = () => {
  //document.activeElement.blur();
//};


let contadorCliques = 0;
document.addEventListener("click", () => {
    contadorCliques++;

    if (contadorCliques === 5) {
      alert("Você clicou 10 vezes!");
      contadorCliques = 0;
    }
  });