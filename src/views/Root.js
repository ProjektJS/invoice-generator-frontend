import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import CreateInvoicePage from 'views/CreateInvoicePage';
import LandingPage from './LandingPage';
import ErrorNotFoundPage from './404';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home}>
          <LandingPage />
        </Route>
        <Route exact path={routes.create}>
          <Redirect to={routes.sellerStep} />
        </Route>
        <Route path={routes.sellerStep}>
          <CreateInvoicePage />
        </Route>
        <Route path={routes.clientStep}>
          <CreateInvoicePage />
        </Route>
        <Route path={routes.itemsStep}>
          <CreateInvoicePage />
        </Route>
        <Route path={routes.othersStep}>
          <CreateInvoicePage />
        </Route>
        <Route path={routes.finishStep}>
          <CreateInvoicePage />
        </Route>
        <Route path="*">
          <ErrorNotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
