import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from 'theme/styles';
import UserPageTemplate from 'templates/UserPageTemplate';

const PersonsStep = React.lazy(() => import('components/Steps/PersonsStep'));
const ItemsStep = React.lazy(() => import('components/Steps/ItemsStep'));
const OthersStep = React.lazy(() => import('components/Steps/OthersStep'));
const FinishStep = React.lazy(() => import('components/Steps/FinishStep'));

const CreateInvoicePage = () => {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <UserPageTemplate>
      <Suspense fallback={<CircularProgress className={classes.circularProgress} />}>
        {pathname === routes.personsStep && <PersonsStep />}
        {pathname === routes.itemsStep && <ItemsStep />}
        {pathname === routes.othersStep && <OthersStep />}
        {pathname === routes.finishStep && <FinishStep />}
      </Suspense>
    </UserPageTemplate>
  );
};

export default CreateInvoicePage;
