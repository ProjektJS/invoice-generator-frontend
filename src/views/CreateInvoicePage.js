import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from 'theme/styles';
import UserPageTemplate from 'templates/UserPageTemplate';

const SellerStep = React.lazy(() => import('components/Form/SellerStep'));
const ClientStep = React.lazy(() => import('components/Form/ClientStep'));
const ItemsStep = React.lazy(() => import('components/Form/ItemsStep'));
const OthersStep = React.lazy(() => import('components/Form/OthersStep'));
const FinishStep = React.lazy(() => import('components/Form/FinishStep'));

const CreateInvoicePage = () => {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <UserPageTemplate>
      <Suspense fallback={<CircularProgress className={classes.circularProgress} />}>
        {pathname === routes.sellerStep && <SellerStep />}
        {pathname === routes.clientStep && <ClientStep />}
        {pathname === routes.itemsStep && <ItemsStep />}
        {pathname === routes.othersStep && <OthersStep />}
        {pathname === routes.finishStep && <FinishStep />}
      </Suspense>
    </UserPageTemplate>
  );
};

export default CreateInvoicePage;
