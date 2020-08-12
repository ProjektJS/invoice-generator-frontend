import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { CreateInvoicePageTemplate } from 'layouts';

const PersonsStep = React.lazy(() => import('components/Steps/PersonsStep'));
const ItemsStep = React.lazy(() => import('components/Steps/ItemsStep'));
const OthersStep = React.lazy(() => import('components/Steps/OthersStep'));
const FinishStep = React.lazy(() => import('components/Steps/FinishStep'));

const CreateInvoicePage = () => {
  const { pathname } = useLocation();

  return (
    <CreateInvoicePageTemplate>
      {pathname === routes.personsStep && <PersonsStep />}
      {pathname === routes.itemsStep && <ItemsStep />}
      {pathname === routes.othersStep && <OthersStep />}
      {pathname === routes.finishStep && <FinishStep />}
    </CreateInvoicePageTemplate>
  );
};

export default CreateInvoicePage;
