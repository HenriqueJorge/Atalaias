import React, { Component } from 'react';
import Barra from './Navbar'
import Repertorio from './ListaDeMusicas.js'
import {Container,Col,Row} from 'react-bootstrap';
import Iframe from 'react-iframe'


class App extends Component {
  render() {
    return (
      <>
      <Barra/>
      <Repertorio/>
      <Container>
        <Row>
            <Col xl={3}>
                    <Container>
                      <div>
                          <Iframe url='https://www.youtube.com/embed/E7qEIwksIGs' width = " 450px " height = " 450px " display = " inicial " allowFullScreen/>
                     </div>
                     
                    </Container>
                    <h2>teste</h2>
            </Col>
        </Row>
        </Container>
      </>
    );
  }
}

export default App;
