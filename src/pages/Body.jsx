import React from 'react';
import { node } from 'prop-types';
import '../App.css';

const Body = ({children}) => {
  return (
    <div className="body-align-txt">{children}</div>
  );
};


Body.propTypes = {
  children: node.isRequired,
};


export default Body;
