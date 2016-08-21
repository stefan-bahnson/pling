import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../imports/ui/App';
import Caller from '../imports/ui/Caller';
import Reciever from '../imports/ui/Reciever';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Caller}/>
        <Route path="reciever" component={Reciever}/>
      </Route>
    </Router>,
    document.getElementById('render-target'));
});
