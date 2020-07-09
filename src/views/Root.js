import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateInvoicePage from 'views/CreateInvoicePage';
import LandingPage from './LandingPage';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/create">
          <CreateInvoicePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
