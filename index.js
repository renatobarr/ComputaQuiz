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

      if (opacidade >= 0.9) {
        alert("uepa");
      } else {
        alert("uopa");
      }

    } else if (foco.tagName === "H2") {
      
      const elementos = Array.from(document.querySelectorAll("h1, h2"));
        
      let indexAtual = 1;
      elementos[indexAtual].focus();
      const foco = document.activeElement;
      foco.classList.add('animar');

      setTimeout(() => {
        foco.classList.remove('animar');
        window.location.href = 'test.html';
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
            window.location.href = 'test.html';
          }, 500); 

        }
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
