
const jogadores = elenco.filter(jogador => jogador.elenco === 'masculino');

const jogadoras = elenco.filter(jogador => jogador.elenco === 'feminino');

  document.addEventListener("DOMContentLoaded", function() {
    
   for (const jogadora of jogadoras){
        var article = document.createElement('article');  
        var img = document.createElement('img');
        const nome = document.createElement('h5');
        img.src = jogadora.imagem;
        nome.innerHTML = jogadora.nome;
        article.appendChild(img);   
        article.appendChild(nome);  
        jogadorasList.appendChild(article);

      img.addEventListener('click', function() {
        window.location.href = "./detalhes.html?nome=" +jogadora.nome; 
    });
  }

    for (const jogador of jogadores){
      var article = document.createElement('article');  
      const img = document.createElement('img');
      const nome = document.createElement('h5');
      img.src = jogador.imagem;
      nome.innerHTML = jogador.nome;
      article.appendChild(img);   
      article.appendChild(nome);  
      jogadoresList.appendChild(article);

      img.addEventListener('click', function() {
        window.location.href = "./detalhes.html?nome=" +jogador.nome;
      });
  }
  });