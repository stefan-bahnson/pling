import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from './Button';

const App = ({children}) => (
  <div className="app">
    <div className="nav">
      <Link to="/" activeClassName="active" onlyActiveOnIndex>Caller</Link>
      <Link to="/reciever" activeClassName="active">reciever</Link>
    </div>
    {children}
  </div>
);

export default App;
