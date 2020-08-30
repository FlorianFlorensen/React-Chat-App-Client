import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    // wenn hier nich exact Path angegeben wird bekommt man einen Error sollte man mit einer url direct auf /chat zugreifen will da der / auch bei der ersten Route gematched wird
    <Router>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
