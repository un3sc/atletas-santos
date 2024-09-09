function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campo pesquisa for uma str sem nada 
    if(!campoPesquisa) {
      section.innerHTML = "<p><strong>Atleta não foi encontrado</strong></p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada jogador na lista de jogadores
    for (let jogador of jogadores) {
      titulo = jogador.titulo.toLowerCase()
      descricao = jogador.descricao.toLowerCase()
      tags = jogador.tags.toLowerCase()

      // Se titulo includes campo de pesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada jogador, incluindo o nome, descrição e link
        resultados += `
        <div class="item-resultado">
          <img src="${jogador.imagem}" alt="imagem-pepe" class="img-resultado ">
          <h2><a href="${jogador.linkTtitulo}" target="_blank">${jogador.titulo}</a></h2>
          <p class="descricao-meta">${jogador.descricao}</p>
          </p>
            <p><strong>Posição:</strong> ${jogador.posicao}</p>
            <p><strong>Títulos pelo Santos:</strong> ${jogador.trofeus}</p>
            <p><strong>Gols Pelo Santos:</strong> ${jogador.gols}</p>
          <a href="${jogador.link}" target="_blank"><strong>Mais informações</strong></a>
        </div>`;
      }
    }

    

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
// console.log(jogadores);