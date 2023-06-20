document.addEventListener("DOMContentLoaded", function() {

    var searchParams = new URLSearchParams(window.location.search);
    var nomeUrl = searchParams.get("nome");

    const jogadora = elenco.filter(j => j.nome == nomeUrl);

    console.log(jogadora)

        var nome = document.getElementById('nome');
        var posicao = document.getElementById('posicao');
        var sobre = document.getElementById('sobre');
        var nome_completo = document.getElementById('nome_completo');
        var nascimento = document.getElementById('nascimento'); 
        var altura = document.getElementById('altura');
        var imagem = document.getElementById('imagem');
        nome.innerText = nomeUrl;
        posicao.innerText = jogadora[0].posicao;
        imagem.src = jogadora[0].imagem;
        sobre.innerText = 'Mais informações: '+ jogadora[0].descricao;
        nome_completo.innerText = 'Nome completo: '+ jogadora[0].nome_completo;
        altura.innerText = 'Altura: '+jogadora[0].altura;
        nascimento.innerText = 'Nascimento: '+jogadora[0].nascimento;


})

