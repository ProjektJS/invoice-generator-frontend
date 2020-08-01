import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StepperBar from 'components/StepperBar';
import { useStyles } from 'theme/styles';

const Form = ({ children, activeStep, handleSubmit, onSubmit, previousStep }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center" spacing={2} xs={12}>
        <Grid item xs={12}>
          <StepperBar activeStep={activeStep} />
        </Grid>
        <Grid container item xs={9}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container xs={12} spacing={2}>
              <Grid item xs={12} className={classes.fieldsContainer}>
                {children}
              </Grid>
              <Grid item container xs={12}>
                <Grid item>
                  {activeStep > 0 && (
                    <Button variant="outlined" onClick={() => history.push(previousStep)}>
                      Cofnij
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Dalej
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

Form.propTypes = {
  children: PropTypes.element.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  previousStep: PropTypes.string.isRequired,
};

export default Form;
