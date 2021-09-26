import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, /* Redirect, */ Switch } from 'react-router-dom';
import Main from './pages/Main';
// import ContentBody from './ContentBody';
// import WelcomeMsg from './WelcomeMsg';
// import dev3 from '../src/dev3.png';
// import { Button } from 'reactstrap';
// import { ola, myName, about } from './bodyContent';
import Contatos from './pages/Contatos';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Navbar from './pages/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/contact"><Contatos /></Route>
        <Route exact path="/project"><Projetos /></Route>
        <Route exact path="/about"><Sobre /></Route>
      </Switch>
    </main>
  </Router>
);

export default App;
