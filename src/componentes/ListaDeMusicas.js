import React, { Component } from 'react';
import ItemMusica from './repertorio.js';
import {Container,Row,Col} from 'react-bootstrap';
import './RepertorioStyle.css'


let musicas= [{nome: 'ENTÃO CREIA ', local: "https://www.youtube.com/embed/E7qEIwksIGs"},
              {nome: 'ABRA OS MEUS OLHOS' , local: 'https://www.youtube.com/embed/-TOBIlrkl60'},
              {nome: 'OUSADO AMOR' , local: 'https://www.youtube.com/embed/wSKKEAnLTDw'},
              {nome: 'QUERO CONHECER JESUS' , local: 'https://www.youtube.com/embed/-8u764hTRSw'}
  ]


class ListaDeMusicas extends Component {
  render() {
    return (
      <>
      <Container>
        <Row>
            {musicas.map((m) => (
              <Col xs={3} lg='3' >
                <ItemMusica nome={m.nome} local={m.local}  />
              </Col>
            ))}
        </Row>
      </Container>
          
      </>
    )
  }
}

export default ListaDeMusicas;