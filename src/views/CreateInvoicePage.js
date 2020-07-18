import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import UserPageTemplate from 'templates/UserPageTemplate';
import { CommodityStep, PurchaserStep, ItemsStep } from 'components/Form';

const CreateInvoicePage = () => {
  const { pathname } = useLocation();

  return (
    <UserPageTemplate>
      {pathname === routes.commodityStep && <CommodityStep />}
      {pathname === routes.purchaserStep && <PurchaserStep />}
      {pathname === routes.itemsStep && <ItemsStep />}
    </UserPageTemplate>
  );
};

export default CreateInvoicePage;
