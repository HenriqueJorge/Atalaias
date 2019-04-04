import React, {Component} from 'react';
import {Container,Col,Card} from 'react-bootstrap';
import Iframe from 'react-iframe'


function itemRepertorio () {
        return (
            <> 
                <Container>
                    <Col xs={3}>
                        <Card className="text-center">
                            <Card.Body>
                                <Iframe url={this.props.musica.local}
                                        allowFullScreen/>
                                <Card.Title>{this.props.musica.nome}/></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </>
        )

}

export default itemRepertorio ;