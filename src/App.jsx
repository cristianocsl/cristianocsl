import React from 'react';
import './App.css';
import Home from '../src/pages/Home';
// import Body from './Body';
// import Header from './Header';
// import dev3 from '../src/dev3.png';
// import { Button } from 'reactstrap';
// import { ola, myName, about } from './bodyContent';
import Contatos from '../src/pages/Contatos';
import Projetos from '../src/pages/Projetos';
import Sobre from '../src/pages/Sobre';
import { BrowserRouter as Router, Route, /* Redirect, */ Switch } from 'react-router-dom';
import Navbar from '../src/pages/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/contact"><Contatos /></Route>
          <Route exact path="/project"><Projetos /></Route>
          <Route exact path="/about"><Sobre /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
