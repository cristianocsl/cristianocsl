import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';

const App = () => (
  <Router>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/contact"><Contacts /></Route>
        <Route exact path="/project"><Projetos /></Route>
        <Route exact path="/about"><Sobre /></Route>
      </Switch>
    </main>
  </Router>
);

export default App;
