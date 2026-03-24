document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnRegras");
    const regras = document.getElementById("regras");
  
    btn.addEventListener("click", () => {
      regras.classList.toggle("hidden");
    });
  });

  
  function sortearTema() {
    const temas = [
      "Escola",
      "Viagem",
      "Situação constrangedora",
      "Primeiro encontro",
      "Infância",
      "Algo assustador",
      "História engraçada"
    ];
  
    const tema = temas[Math.floor(Math.random() * temas.length)];
    const temaDiv = document.getElementById("tema");
  
    temaDiv.textContent = tema;
    temaDiv.classList.remove("hidden");   
  }

console.log("JS carregou");
  