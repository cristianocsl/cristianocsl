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
        {
          content.map((text, ind) => (
            <>
              <ContentBody key={ ind }><h2>{ text.hi }</h2></ContentBody>
              <ContentBody key={ ind }><h1>{ text.name }</h1></ContentBody>
              <ContentBody key={ ind }><h2>{ text.student }</h2></ContentBody>
            </>
          ))
        }
      </div>
      <img src={ dev3 } alt="logo" className="App-logo" />
    </div>
    <Button type="button" color="outline-dark" size="lg">Portfólio</Button>
  </div>
);

export default Main;
