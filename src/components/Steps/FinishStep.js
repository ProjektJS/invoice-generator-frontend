import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import StepperBar from 'components/StepperBar';
import { routes } from 'routes';
import InvoicePaper from 'components/InvoicePaper';
import { addInvoiceData } from 'data/actions';
import { useDeviceScreenContext } from 'context';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: white;

  @media (min-width: 768px) {
    position: static;
    width: 85%;
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledIframe = styled.iframe`
  width: 100vw;
  height: 65vh;
  @media (min-width: 768px) {
    width: 595px;
  }
`;

const StyledInvoiceWrapper = styled.div`
  margin: 16px 0;
  min-height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 595px;
    min-height: 75vh;
  }
`;

const StyledButton = styled(Button)`
  width: 50%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const FinishStep = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isTablet } = useDeviceScreenContext();

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
    <StyledContainer maxWidth="lg">
      <StepperBar activeStep={3} />
      {fileSrc ? (
        <StyledInvoiceWrapper>
          <StyledIframe title="invoice" src={fileSrc} />
          <StyledButtonWrapper>
            <StyledButton
              variant={isTablet ? 'outlined' : 'text'}
              onClick={() => history.push(routes.othersStep)}
            >
              <KeyboardArrowLeft />
              Cofnij
            </StyledButton>
            <StyledButton
              variant={isTablet ? 'contained' : 'text'}
              color={isTablet ? 'primary' : 'default'}
              onClick={handleInvoiceGenerate}
            >
              Generuj fakturę
            </StyledButton>
          </StyledButtonWrapper>
        </StyledInvoiceWrapper>
      ) : (
        <InvoicePaper>
          <StyledButtonWrapper>
            <StyledButton
              variant={isTablet ? 'outlined' : 'text'}
              onClick={() => history.push(routes.othersStep)}
            >
              Cofnij
              <KeyboardArrowLeft />
            </StyledButton>
            <StyledButton
              variant={isTablet ? 'contained' : 'text'}
              color={isTablet ? 'primary' : 'default'}
              onClick={handleInvoiceGenerate}
            >
              Generuj fakturę
            </StyledButton>
          </StyledButtonWrapper>
        </InvoicePaper>
      )}
    </StyledContainer>
  );
};

export default FinishStep;
