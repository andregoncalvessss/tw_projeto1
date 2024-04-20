//////////////ir para pag inicio//////////////
document.addEventListener("DOMContentLoaded", function() {
    const sobreLink = document.getElementById("inicio");
  
    // Adiciona um evento de clique ao link "Sobre nós"
    sobreLink.addEventListener("click", function(event) {
        // Previne o comportamento padrão do clique em um hiperlink (evita que a página seja recarregada)
        event.preventDefault();
        
        // Redireciona para outra página
        window.location.href = "pag_principal.html";
    });
  });

//////////////ir para pag favoritos//////////////
document.addEventListener("DOMContentLoaded", function() {
    const sobreLink = document.getElementById("listfavorito");
  
    // Adiciona um evento de clique ao link "Sobre nós"
    sobreLink.addEventListener("click", function(event) {
        // Previne o comportamento padrão do clique em um hiperlink (evita que a página seja recarregada)
        event.preventDefault();
        
        // Redireciona para outra página
        window.location.href = "listafavoritos.html";
    });
  });

  ///////////////tipo de filmes////////////////////
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }