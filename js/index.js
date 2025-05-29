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
      
      const estilo = window.getComputedStyle(foco);
      const opacidade = parseFloat(estilo.opacity);

      if (opacidade <= 0.5) {
        /*alert("Não chegou nem perto!");*/
        balao1.style.opacity = "1";
        balao1.style.transform = "translateY(30px)";

      } else if (opacidade >= 0.51 && opacidade <= 0.6 ) {
        /*alert("Morreu na praia!");*/
        balao2.style.opacity = "1";
        balao2.style.transform = "translateY(30px)";
        
      } else if (opacidade >= 0.61 && opacidade <= 0.7 ) {
        /*alert("Tá quase!");*/
        balao3.style.opacity = "1";
        balao3.style.transform = "translateY(30px)";
      
      } else if (opacidade >= 0.71 && opacidade <= 0.9 ) {
        /*alert("NA TRAVEEE!");*/
        balao5.style.opacity = "1";
        balao5.style.transform = "translateY(30px)";
      
      } else if (opacidade >= 0.91) {
        /*alert("Parabéns seu fanfarrão!");*/
        balao4.style.opacity = "1";
        balao4.style.transform = "translateY(30px)";
      
      }

    } else if (foco.tagName === "H2") {
      
      const elementos = Array.from(document.querySelectorAll("h1, h2"));
        
      let indexAtual = 1;
      elementos[indexAtual].focus();
      const foco = document.activeElement;
      foco.classList.add('animar');

      setTimeout(() => {
        foco.classList.remove('animar');
        window.location.href = './cadastro.html';
      }, 500); 

    }else{
        const elementos = Array.from(document.querySelectorAll("h1, h2"));
        
        let indexAtual = 1;
        elementos[indexAtual].focus();
        const foco = document.activeElement;
        if (foco.tagName === "H2") {
          foco.classList.add('animar');

          setTimeout(() => {
            foco.classList.remove('animar');
            window.location.href = './cadastro.html';
          }, 500); 

        }
    }
  }
});

  let contadorCliques = 0;
  document.addEventListener("click", () => {
    contadorCliques++;
    const balao1 = document.getElementById("imagem1");
    const balao2 = document.getElementById("imagem2");
    const balao3 = document.getElementById("imagem3");
    const balao4 = document.getElementById("imagem4");
    const balao5 = document.getElementById("imagem5");

    balao1.style.opacity = "0";
    balao2.style.opacity = "0";
    balao3.style.opacity = "0";
    balao4.style.opacity = "0";
    balao5.style.opacity = "0";
    balao1.style.transform = "translateY(0)";
    balao2.style.transform = "translateY(0)";
    balao3.style.transform = "translateY(0)";
    balao4.style.transform = "translateY(0)";
    balao5.style.transform = "translateY(0)";

    if (contadorCliques === 5) {
      alert("Você clicou 10 vezes!");
      contadorCliques = 0;
    }
  });
