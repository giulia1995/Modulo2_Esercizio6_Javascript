//esercizio 7
const cambioH1 = function () {
    let h1Cambio = document.querySelector("h1");
    h1Cambio.textContent = "Discover Apple World";
  };
  cambioH1();
  //esercizio 8
  const cambiaSfondo = function () {
    let cambioBack = document.querySelector("body");
    cambioBack.style.background = "lightblue";
  };
  cambiaSfondo();
  //esercizio 9
  
  const cambiaFooter = function () {
    let footerDiverso = document.querySelector("footer");
    footerDiverso.textContent =
      "Discover Apple World Via Della Libertà,12, Palermo, Italia";
  };
  cambiaFooter();
  
  //esercizio 11
  
  function prova() {
    const img = document.querySelectorAll("img");
    for (i = 0; i <= img.length; i++) {
      img[i].classList.add("show");
    }
  }
  prova();