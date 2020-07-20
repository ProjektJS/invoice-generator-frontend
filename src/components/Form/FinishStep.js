import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useStyles } from 'theme/styles';
import StepperBar from 'components/StepperBar';
import { routes } from 'routes';
import InvoicePaper from 'components/InvoicePaper';
import { addInvoiceData } from 'data/actions';

const FinishStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInvoiceGenerate = () => {
    dispatch(addInvoiceData());
  };

  return (
    <div>
      <StepperBar activeStep={4} />
      <div className={classes.formContainer}>
        <InvoicePaper />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => history.push(routes.othersStep)}
          >
            Cofnij
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleInvoiceGenerate}
          >
            Generuj fakturę
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinishStep;
