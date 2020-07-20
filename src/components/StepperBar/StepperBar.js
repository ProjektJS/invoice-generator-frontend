import React from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const StepperBar = ({ activeStep }) => {
  const steps = [
    'Sprzedawca',
    'Nabywca',
    'Towary/usługi',
    'Pozostałe informacje',
    'Tworzenie faktury',
  ];

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

StepperBar.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default StepperBar;
