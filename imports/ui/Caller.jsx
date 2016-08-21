import React, { Component } from 'react';
import { Users } from '../api/users';
import { Calls } from '../api/calls';

import Button from './Button';

class Caller extends Component {

  callRecievers(call) {
    Calls.insert({
      active: call
    });
  }

  render() {
    return (
      <div className="container">
        <Button handleClick={(call) => this.callRecievers(call)} label={'CALL'}/>
      </div>
    )
  }
}

export default Caller;