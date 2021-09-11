import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';

const Header = () => {
  const bemVindo = `Bem Vindo!`;
  const welcome = `Welcome!`;
  const bienvenido = `Bienvenido!`;

  return (
    <div className="header-title">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
          .typeString(bemVindo)
          .pauseFor(3000)
          .deleteAll()
          .typeString(welcome)
          .pauseFor(2000)
          .deleteAll()
          .typeString(bienvenido)
          .pauseFor(2000)
          .deleteAll()
          .typeString(bemVindo)
          .deleteAll()
          .start();
        }} />
    </div>
  );
}

export default Header;
