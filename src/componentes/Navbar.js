import React, {Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import './homeStyle.css'




const logo = require('../assets/logo.png')


class BarraSuperior extends Component {
    render() {
        return(
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><img src={logo} width="35"  height="35" className="d-inline-block align-top" alt="React Bootstrap logo" /></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/musicas">Repertorio</Nav.Link>
                    <Nav.Link href="#pricing">Componentes</Nav.Link>
                    </Nav>
                </Navbar>
                <Container className='fundo'>   
                </Container>
            </>
        );
    }
}

export default BarraSuperior;