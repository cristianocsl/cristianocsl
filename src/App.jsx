import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import Projetos from './pages/Projetos';
import Sobre from './pages/Sobre';
import Navbar from './components/NavBar/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <main>
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
