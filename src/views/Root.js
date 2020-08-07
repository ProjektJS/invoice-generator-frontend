import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LandingPage, ErrorPage, CreateInvoicePage } from 'views';
import { routes } from 'routes';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={LandingPage} />
        <Route exact path={routes.create} render={() => <Redirect to={routes.personsStep} />} />
        <Route path={routes.personsStep} component={CreateInvoicePage} />
        <Route path={routes.itemsStep} component={CreateInvoicePage} />
        <Route path={routes.othersStep} component={CreateInvoicePage} />
        <Route path={routes.finishStep} component={CreateInvoicePage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Root;
