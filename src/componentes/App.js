import React, { Component } from 'react';
import Barra from './Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ListaDeMusicas from './ListaDeMusicas.js'
import Atalaia from './Atalaia.js'

class App extends Component {
  render() {
    return (
      <>
      <Barra/> 
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Atalaia} />
          <Route path="/musicas" exact component={ListaDeMusicas}/>
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
