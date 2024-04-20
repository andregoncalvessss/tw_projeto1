//barra de pequisa

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

///////////////////filmes ação///////////////////////
document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById("gridContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const initialMovies = [
        "img/venom.jpeg",
        "img/VF.jpeg",
        "img/dune.jpeg",
        "img/godzilla.jpg",
  ];

  // Função para adicionar imagens de filmes ao grid
  function addMoviesToGrid(movies) {
    movies.forEach(movie => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      const img = document.createElement("img");
      img.src = movie;
      img.alt = "Filme";

      gridItem.appendChild(img);
      gridContainer.appendChild(gridItem);
    });
  }

  // Adiciona os primeiros filmes ao grid
  addMoviesToGrid(initialMovies);

  // Função para carregar mais filmes
  function loadMoreMovies() {
    const moreMovies = [
        "img/imagens2.jpeg",
        "img/imagens2.jpeg",
        "img/imagens2.jpeg",
        "img/imagens2.jpeg",
    ];



    addMoviesToGrid(moreMovies);

    // Esconde o botão se não houver mais filmes para carregar
    if (moreMovies.length === 0) {
      loadMoreBtn.style.display = "none";
    }
  }

  // Event listener para o botão "Carregar mais filmes"
  loadMoreBtn.addEventListener("click", loadMoreMovies);
});




//////////////ir para pag sobre nos//////////////
document.addEventListener("DOMContentLoaded", function() {
  const sobreLink = document.getElementById("sobrenos");

  // Adiciona um evento de clique ao link "Sobre nós"
  sobreLink.addEventListener("click", function(event) {
      // Previne o comportamento padrão do clique em um hiperlink (evita que a página seja recarregada)
      event.preventDefault();
      
      // Redireciona para outra página
      window.location.href = "pag_aboutus.html";
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




