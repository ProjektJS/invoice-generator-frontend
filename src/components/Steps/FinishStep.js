import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes';
import { StepButtons } from 'components/Buttons';
import { StepTemplate } from 'layouts';
import InvoicePaper from 'components/InvoicePaper';
import { addInvoiceData } from 'data/actions';

const StyledIframe = styled.iframe`
  width: 90%;
  height: 57vh;
  margin-bottom: auto;

  @media (min-width: 1920px) {
    height: 65vh;
  }
`;

const StyledInvoice = styled.div`
  min-height: 85vh;
  width: 100vw;
  padding: 45px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1280px) {
    width: 55vw;
  }

  @media (min-width: 1440px) {
    min-height: 70vh;
    width: 45vw;
  }

  @media (min-width: 1920px) {
    min-height: 79vh;
    width: 35vw;
  }
`;

const FinishStep = () => {
  const dispatch = useDispatch();

  const handleInvoiceGenerate = () => {
    dispatch(addInvoiceData());
  };

  const fileSrc = useSelector((state) => state.file.fileSrc);
  const invoice = useSelector((state) => state.invoice);

  if (
    invoice.createPlace === '' &&
    invoice.createDate === '' &&
    invoice.sellDate === '' &&
    invoice.number === ''
  ) {
    return <Redirect to={routes.othersStep} />;
  }

  return (
    <StepTemplate activeStep={3}>
      <StyledInvoice>
        {fileSrc ? <StyledIframe name="invoice" src={fileSrc} /> : <InvoicePaper />}
        <StepButtons
          activeStep={3}
          previousStepRoute={routes.othersStep}
          handleInvoiceGenerateFn={handleInvoiceGenerate}
          done={Boolean(fileSrc)}
        />
      </StyledInvoice>
    </StepTemplate>
  );
};

export default FinishStep;
