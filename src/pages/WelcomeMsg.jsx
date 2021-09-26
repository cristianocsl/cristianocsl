import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';

const WelcomeMsg = () => {
  const bemVindo = 'Bem Vindo!';
  const welcome = 'Welcome!';
  const bienvenido = 'Bienvenido!';
  const TIME_1 = 3000;
  const TIME_2 = 2000;

  return (
    <div className="header-title">
      <Typewriter
        onInit={ (typewriter) => {
          typewriter
            .typeString(bemVindo)
            .pauseFor(TIME_1)
            .deleteAll()
            .typeString(welcome)
            .pauseFor(TIME_2)
            .deleteAll()
            .typeString(bienvenido)
            .pauseFor(TIME_2)
            .deleteAll()
            .typeString(bemVindo)
            .deleteAll()
            .start();
        } }
      />
    </div>
  );
};

export default WelcomeMsg;
