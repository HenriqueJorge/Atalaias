import React, { Component } from 'react';
import ItemMusica from './repertorio.js';
import Bd from '../database/BancoDeDados.js'

const PRODUTOS_POR_LINHA = 4;
let state = {
  musicas: Bd.getMusicas()
};

class ListaDeMusicas extends Component {
  renderMusica = (linha) => {
    return (
      <div class="row">
        {linha.map((p) => (
          <ItemMusica musica={p} />
        ))}
      </div>
    );
  }
  
  render() {
    return (
        () => {
          let linhas = [];

          for (let i = 0; i < state.musicas.length; i += PRODUTOS_POR_LINHA) {
            linhas.push(state.musicas.slice(i, i + PRODUTOS_POR_LINHA));
          }

          return linhas.map(this.renderMusica);
        }
    );
  }
}

export default ListaDeMusicas;