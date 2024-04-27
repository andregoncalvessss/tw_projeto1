const atualizarCol = () => {
    let strHtml = `
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<div class="container">
<div class="row" id="filmes">
  <div class="col-md-3">
    <div class="card" width="100%">
      <img class="card-img-top" src="img/pacto.jpg" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">O Pacto</h4>

        <p class="card-text">2023 | 2h3m | Ação/Guerra </p>

        <button id="teste" onclick=teste() class="btn btn-primary">Ver mais</button>

        <div id="modal" class="modal">
            <div class="modal-content">
                <span id="close" class="close">&times;</span>
                <h2 id="titulo"></h2>
                <p id="tipo"></p>
                <p id="duracao"></p>
                <p id="descricao"></p>
                <img id="imagem" alt="Capa do filme" />
            </div>
        </div>
      </div>
    </div>
    
  </div>



  <div class="col-md-3">
    <div class="card" width="100%">
      <img class="card-img-top" src="img/rebelmoon.jpg" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">Rebel Moon - Parte 1: A Menina do Fogo</h4>

        <p class="card-text">2023 | 2h14m | Ação/Ficção científica</p>
        <button id="teste1" onclick=teste1() class="btn btn-primary">Ver mais</button>

        <div id="modal" class="modal">
            <div class="modal-content">
                <span id="close" class="close">&times;</span>
                <h2 id="titulo"></h2>
                <p id="tipo"></p>
                <p id="duracao"></p>
                <p id="descricao"></p>
                <img id="imagem" alt="Capa do filme" />
            </div>
        </div>
      </div>
    </div>
    




  </div> <div class="col-md-3">
    <div class="card" width="100%">
      <img class="card-img-top" src="img/final.jpg" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">Destruição Final: O Último Refúgio</h4>

        <p class="card-text">2020 | 1h59m | Ação/Thriller
</p>
<button id="teste2" onclick=teste2() class="btn btn-primary">Ver mais</button>

<div id="modal" class="modal">
    <div class="modal-content">
        <span id="close" class="close">&times;</span>
        <h2 id="titulo"></h2>
        <p id="tipo"></p>
        <p id="duracao"></p>
        <p id="descricao"></p>
        <img id="imagem" alt="Capa do filme" />
    </div>
</div>
      </div>
    </div>
    



  </div> <div class="col-md-3">
    <div class="card" width="100%">
      <img class="card-img-top" src="img/guerreiro.jpg" alt="Card image" >
      <div class="card-body">
        <h4 class="card-title">Um Homem Furioso</h4>

        <p class="card-text">2021 | 1h58m | Ação/Crime</p>
        <button id="teste3" onclick=teste3() class="btn btn-primary">Ver mais</button>

        <div id="modal" class="modal">
            <div class="modal-content">
                <span id="close" class="close">&times;</span>
                <h2 id="titulo"></h2>
                <p id="tipo"></p>
                <p id="duracao"></p>
                <p id="descricao"></p>
                <img id="imagem" alt="Capa do filme" />
            </div>
        </div>
      </div>
    </div>

    <br>
    <br>

    

    `;
  
    document.getElementById("moreMovies").innerHTML += strHtml;
    document.getElementById("loadMoreBtn").hidden = true;
  }
  
  document.getElementById("loadMoreBtn").addEventListener("click", atualizarCol);




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




const atualizarCol1 = () => {
  let strHtml = `
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
<div class="container">
<div class="row" id="filmes">
<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/lagrimas.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">O Fabricante de Lágrimas</h4>

      <p class="card-text">20224 | 1h45m | Romance/Drama</p>
      <button id="teste4" onclick=teste4() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  
</div>
<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/culpamia.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Minha Culpa</h4>

      <p class="card-text">2023 | 1h57m | Romance/Drama </p>
      <button id="teste5" onclick=teste5() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  
</div> <div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/nome.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Chama-me Pelo Teu Nome</h4>

      <p class="card-text">2017 | 2h10m | Romance/Drama</p>
      <button id="teste6" onclick=teste6() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  
</div> <div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/love.jpg" alt="Card image" >
    <div class="card-body">
      <h4 class="card-title">Corações Marcados</h4>

      <p class="card-text"> 2022 | 2h02m | Romance/Musical</p>
      <button id="teste7" onclick=teste7() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>

  <br>
  <br>

  `;

  document.getElementById("moreMovies1").innerHTML += strHtml;
  document.getElementById("loadMoreBtn1").hidden = true;
}

document.getElementById("loadMoreBtn1").addEventListener("click", atualizarCol1);





const atualizarCol2 = () => {
  let strHtml = `
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
<div class="container">
<div class="row" id="filmes">
<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/heroi.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Herói por Encomenda</h4>

      <p class="card-text">2023 | 1h49m | Ação/Comédia</p>
      <button id="teste8" onclick=teste8() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>


  
</div>
<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/agua.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Por água abaixo</h4>

      <p class="card-text">2006 | 1h26m | Comédia/Aventura </p>
      <button id="teste9" onclick=teste9() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  


</div> <div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/loiras.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Loiras à Força</h4>

      <p class="card-text">2004 | 1h49m | Comédia/Crime</p>
      <button id="teste10" onclick=teste10() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  


</div> <div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/wonka.jpg" alt="Card image" >
    <div class="card-body">
      <h4 class="card-title">Wonka</h4>

      <p class="card-text">2023 | 1h57m | Comédia/Aventura</p>
      <button id="teste11" onclick=teste11() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>

  <br>
  <br>

  `;

  document.getElementById("moreMovies2").innerHTML += strHtml;
  document.getElementById("loadMoreBtn2").hidden = true;
}

document.getElementById("loadMoreBtn2").addEventListener("click", atualizarCol2);






const atualizarCol3 = () => {
  let strHtml = `
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
<div class="container">
<div class="row" id="filmes">
<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/convite.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">O Convite</h4>

      <p class="card-text">2022 | 1h44m | Terror/Ação</p>
      <button id="teste12" onclick=teste12() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  
</div>
<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/fala.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Fala Comigo</h4>

      <p class="card-text">2022 | 1h35m | Terror/Crime</p>
      <button id="teste13" onclick=teste13() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  



</div> <div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/it.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">It</h4>

      <p class="card-text">2017 | 2h15m | Terror/Mistério </p>
      <button id="teste14" onclick=teste14() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>
  
</div>


<div class="col-md-3">
  <div class="card" width="100%">
    <img class="card-img-top" src="img/mal.jpg" alt="Card image" >
    <div class="card-body">
      <h4 class="card-title">O Nascimento do Mal</h4>

      <p class="card-text">2022 | 1h30m | Terror/Mistério</p>
      <button id="teste15" onclick=teste15() class="btn btn-primary">Ver mais</button>

      <div id="modal" class="modal">
          <div class="modal-content">
              <span id="close" class="close">&times;</span>
              <h2 id="titulo"></h2>
              <p id="tipo"></p>
              <p id="duracao"></p>
              <p id="descricao"></p>
              <img id="imagem" alt="Capa do filme" />
          </div>
      </div>
    </div>
  </div>

  <br>
  <br>

  `;

  document.getElementById("moreMovies3").innerHTML += strHtml;
  document.getElementById("loadMoreBtn3").hidden = true;
}

document.getElementById("loadMoreBtn3").addEventListener("click", atualizarCol3);



//acao1
document.getElementById("ver-mais").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/c1b12724-a954-4e46-b2b3-50fac346d96b")

      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//acao2
document.getElementById("ver-mais2").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/9b4a5e58-8076-402d-862b-459cecac6984")

      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//acao3
document.getElementById("ver-mais3").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/ba183741-32a3-40cb-ae54-ed123c7acaff")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};



//acao4
document.getElementById("ver-mais4").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/2ecdc709-a2b6-48bc-801d-ee4c859168d2")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//acao5


//acao6



//acao7


//acao8



//Romance1

document.getElementById("ver-mais11").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/57d0773f-3497-4c55-8522-5bc98f9052d6")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};
//Romance2
document.getElementById("ver-mais12").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/a82ac577-84a4-485c-b518-2948bfd9b2d4")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};

//Romance3
document.getElementById("ver-mais13").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/5d5e49cf-ac04-4330-930f-943c1cfc20f8")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//Romance4

document.getElementById("ver-mais14").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/eef4ff54-d0c4-477b-9fe7-675522d61998")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//comedia1
document.getElementById("ver-mais21").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/e926a272-7e5e-47c5-8ffa-8afbe7309c6c")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//comedia2
document.getElementById("ver-mais22").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/83393d64-efbb-45f0-8b0d-7c496e191f08")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//comedia3
document.getElementById("ver-mais23").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/6b799484-90bf-4f05-9c09-f4ebe95c39ce")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//comedia4


document.getElementById("ver-mais24").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/00961275-9c1f-4ae9-a568-f81284c20a1d")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};



//terror1

document.getElementById("ver-mais31").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/e00061d3-36ff-4bb3-a0cd-697698c7abe6")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


//terror2
document.getElementById("ver-mais32").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/a3a69d44-bec4-418f-a68d-ac4e2ecdba6a")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};



//terror3
document.getElementById("ver-mais33").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/4533d374-dd7c-4119-b8e8-6f85b7631011")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};



//terror4

document.getElementById("ver-mais34").addEventListener("click", function() {
  fetch("https://run.mocky.io/v3/34181512-0f48-4b64-875a-7fd3daefb79e")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;

          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};



//acao12
document.getElementById("teste").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste(){
  fetch("https://run.mocky.io/v3/bdda799e-0a8a-460f-8e7f-a4de58caa1a3")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}




//acao22
document.getElementById("teste1").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste1(){
  fetch("https://run.mocky.io/v3/1bbc55cd-141e-4c99-9d56-bf87adc8602e")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste1");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//acao32
document.getElementById("teste2").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste2(){
  fetch("https://run.mocky.io/v3/def17611-af51-4660-b775-ea41de9a3b9f")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste2");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//acao42
document.getElementById("teste3").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste3(){
  fetch("https://run.mocky.io/v3/d71209f1-18b3-4998-8cc6-d10bc0a92174")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste3");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}


//romance12
document.getElementById("teste4").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste4(){
  fetch("https://run.mocky.io/v3/33c9eb58-9733-49ca-b532-842b75290b6f")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste4");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}


//romance22
document.getElementById("teste5").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste5(){
  fetch("https://run.mocky.io/v3/8a07866d-9bae-4f09-920b-afcac7bfd195")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste5");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//romance32
document.getElementById("teste6").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste6(){
  fetch("https://run.mocky.io/v3/b09e3734-9395-47af-84b2-160e9205cc8e")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste6");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//romance42
document.getElementById("teste7").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste7(){
  fetch("https://run.mocky.io/v3/23fea710-8a5e-42f2-a588-691e42efafe8")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste7");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}




//romance13
document.getElementById("teste8").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste8(){
  fetch("https://run.mocky.io/v3/3be716eb-ccb6-4072-a561-5d51e56a06c3")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste8");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//romance23
document.getElementById("teste9").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste9(){
  fetch("https://run.mocky.io/v3/87b51d59-a13a-449b-8db1-3ca9545dd0a4")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste9");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//romance33
document.getElementById("teste10").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste10(){
  fetch("https://run.mocky.io/v3/fd4634d3-9240-4ca7-bba4-7abc31c2981e")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste10");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}




//romance43
document.getElementById("teste11").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste11(){
  fetch("https://run.mocky.io/v3/55854571-2c3e-4583-8b6e-a105f493e88c")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste11");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//terror14
document.getElementById("teste12").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste12(){
  fetch("https://run.mocky.io/v3/51c3bf61-d7d4-43a4-bce6-7a8b59d39ef2")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste12");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//terror24
document.getElementById("teste13").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste13(){
  fetch("https://run.mocky.io/v3/856b322a-39f9-47a3-9e8e-31151b24d4e0")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste13");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//terror34
document.getElementById("teste14").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste14(){
  fetch("https://run.mocky.io/v3/7c5a4235-d512-46ff-af9c-8528aa5725f2")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste14");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}



//terror44
document.getElementById("teste15").addEventListener("click", function() {
  
});

document.getElementById("fechar").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};


function teste15(){
  fetch("https://run.mocky.io/v3/e7c73be2-e18a-48e1-adc5-9182c673e09b")
      .then(response => {
          if (!response.ok) {
              throw new Error("Erro ao obter os dados.");
          }
          return response.json();
      })
      .then(data => {
          // Check if data is an array and extract the first object
          const movie = Array.isArray(data) ? data[0] : data;
          console.log("Teste15");
          // Assign movie data to modal elements
          document.getElementById("titulo").innerText = movie.titulo;
          document.getElementById("imagem").src = movie.imagem;
          document.getElementById("tipo").innerText = `Tipo: ${movie.tipo}`;
          document.getElementById("duracao").innerText = `Duração: ${movie.duracao}`;
          document.getElementById("descricao").innerText = `Descrição: ${movie.descricao}`;
         

          document.getElementById("modal").style.display = "block";
      })
      .catch(error => {
          console.error("Erro ao buscar dados:", error);
      });
}