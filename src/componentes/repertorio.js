import React, {Component} from 'react';
import {Card} from 'react-bootstrap';



class itemRepertorio extends Component {
    render(){ return (
            <> 
                    <Card bg="light" className="text-center" style={{top: '20%', height: '100%' ,width: '100%'}}>
                        <Card.Body>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src={this.props.local}></iframe>
                        </div>
                        </Card.Body>
                        <Card.Title>{this.props.nome}</Card.Title>
                    </Card>
            </>
        )
    }
}

export default itemRepertorio ;