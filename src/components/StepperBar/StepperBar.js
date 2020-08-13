import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useDeviceScreenContext } from 'context';
import { routes } from 'routes';

const StyledStepper = styled(Stepper)`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledMobileStepper = styled(MobileStepper)`
  margin-top: 18px;
`;

const StyledStep = styled(Step)`
  cursor: pointer;
`;

const StepperBar = ({ activeStep }) => {
  const history = useHistory();

  const { isDesktop } = useDeviceScreenContext();

  const steps = [
    { label: 'Dane sprzedawcy/nabywcy', path: routes.personsStep },
    { label: 'Zakupione towary/usługi', path: routes.itemsStep },
    { label: 'Pozostałe informacje', path: routes.othersStep },
    { label: 'Tworzenie faktury', path: routes.finishStep },
  ];

  const invoice = useSelector((state) => state.invoice);

  const handleClickLabel = (path) => {
    switch (path) {
      case routes.personsStep:
        if (Object.entries(invoice.persons).length !== 0) {
          return history.push(path);
        }
        break;
      case routes.itemsStep:
        if (invoice.items.length !== 0) {
          return history.push(path);
        }
        break;
      case routes.othersStep:
        if (
          invoice.createPlace !== '' &&
          invoice.createDate !== '' &&
          invoice.sellDate !== '' &&
          invoice.number !== ''
        ) {
          return history.push(path);
        }
        break;
      case routes.finishStep:
        if (
          invoice.createPlace !== '' &&
          invoice.createDate !== '' &&
          invoice.sellDate !== '' &&
          invoice.number !== ''
        ) {
          return history.push(path);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isDesktop ? (
        <StyledStepper activeStep={activeStep}>
          {steps.map(({ label, path }) => (
            <StyledStep key={label} onClick={() => handleClickLabel(path)}>
              <StepLabel>{label}</StepLabel>
            </StyledStep>
          ))}
        </StyledStepper>
      ) : (
        <>
          <StyledMobileStepper
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
          />
          <Step key={activeStep}>
            <StepLabel>{steps[activeStep].label}</StepLabel>
          </Step>
        </>
      )}
    </>
  );
};

StepperBar.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default StepperBar;
