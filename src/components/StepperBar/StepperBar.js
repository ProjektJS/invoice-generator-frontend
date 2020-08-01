import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useStyles } from 'theme/styles';
import { routes } from 'routes';

const StepperBar = ({ activeStep }) => {
  const classes = useStyles();
  const history = useHistory();

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
    <Container>
      <Stepper activeStep={activeStep} className={classes.stepperContainer}>
        {steps.map(({ label, path }) => (
          <Step key={label} onClick={() => handleClickLabel(path)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

StepperBar.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default StepperBar;
