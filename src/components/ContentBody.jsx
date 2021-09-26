import React from 'react';
import { node } from 'prop-types';
import './ContentBody.css';

const ContentBody = ({ children }) => (
  <div className="body-align-txt">{children}</div>
);

ContentBody.propTypes = {
  children: node.isRequired,
};

export default ContentBody;
