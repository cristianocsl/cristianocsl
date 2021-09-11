import React from 'react';
import Body from './Body';
import Header from './Header';
import dev3 from './dev3.png';
import { Button } from 'reactstrap';
import { ola, myName, about } from './bodyContent';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <Header />
        <div className="container">
          <div className="body-container">
            <Body>{ ola }</Body>
            <Body>{ myName }</Body>
            <Body>{ about }</Body>
          </div>
          <img src={dev3} alt="logo" className="App-logo" />
        </div>
      <Button type="button" color="outline-dark" size="lg">Portfólio</Button>
    </div>
  );
}

export default Home;
