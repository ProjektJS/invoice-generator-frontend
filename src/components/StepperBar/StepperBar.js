import React from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useStyles } from 'theme/styles';

const StepperBar = ({ activeStep }) => {
  const classes = useStyles();
  const steps = [
    'Dane sprzedawcy',
    'Dane nabywcy',
    'Zakupione towary/usługi',
    'Pozostałe informacje',
    'Tworzenie faktury',
  ];

  return (
    <Stepper activeStep={activeStep} className={classes.stepperContainer}>
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
