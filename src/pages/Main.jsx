import React from 'react';
import { Button } from 'reactstrap';
import ContentBody from '../components/ContentBody';
import WelcomeMsg from './WelcomeMsg';
import content from './content';
import dev3 from './dev3.png';
import '../App.css';

console.log(content);
const Main = () => (
  <div className="App">
    <WelcomeMsg />
    <div className="container">
      <div className="body-container">
        <ContentBody><h2>{ content.hi }</h2></ContentBody>
        <ContentBody><h1>{ content.name }</h1></ContentBody>
        <ContentBody><h2>{ content.student }</h2></ContentBody>
      </div>
      <img src={ dev3 } alt="logo" className="App-logo" />
    </div>
    <Button type="button" color="outline-dark" size="lg">Portfólio</Button>
  </div>
);

export default Main;
