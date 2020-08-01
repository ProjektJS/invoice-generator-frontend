import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center" spacing={2} xs={12}>
        <Grid item xs={12}>
          <StepperBar activeStep={3} />
        </Grid>
        <Grid container item xs={9} spacing={2}>
          <Grid item>
            <Typography variant="h5" component="h1" color="initial">
              Podgląd danych
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            {fileSrc ? (
              <iframe className={classes.iframe} title="invoice" src={fileSrc} />
            ) : (
              <InvoicePaper />
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="outlined"
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
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinishStep;
