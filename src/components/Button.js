import React from 'react';
import { node, string, func } from 'prop-types';
import './Button.css';

const STYLES = [
  'btn--primary',
  'btn--outline',
];

const SIZES = [
  'btn--medium',
  'btn--large',
];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={ `btn ${checkButtonStyle} ${checkButtonSize}` }
      onClick={ onClick }
      type={ type }
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: node.isRequired,
  type: string.isRequired,
  onClick: func.isRequired,
  buttonStyle: string.isRequired,
  buttonSize: string.isRequired,
};

export default Button;
