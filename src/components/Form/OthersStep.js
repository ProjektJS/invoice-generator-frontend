import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepperBar from 'components/StepperBar';
import { useStyles } from 'theme/styles';
import { validationSchemaOthers } from 'utils/validationSchema';
import { addOthersData } from 'data/actions';
import { routes } from 'routes';

const OthersStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaOthers),
  });
  const onSubmit = (data) => {
    dispatch(addOthersData(data));
    history.push(routes.finishStep);
  };

  const invoice = useSelector((state) => state.invoice);

  return (
    <div>
      <StepperBar activeStep={2} />
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.fields}>
          <Typography variant="h4" component="h1" className={classes.innerTitle}>
            Dane faktury:
          </Typography>
          <TextField
            className={classes.textField}
            id="number"
            name="number"
            label="Numer"
            inputRef={register}
            error={errors.number}
            helperText={errors.number?.message}
            defaultValue={invoice.number}
          />
          <TextField
            className={classes.textField}
            id="createDate"
            name="createDate"
            type="date"
            label="Data wystawienia"
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register}
            error={errors.createDate}
            helperText={errors.createDate?.message}
            defaultValue={invoice.createDate}
          />
          <TextField
            className={classes.textField}
            id="createPlace"
            name="createPlace"
            label="Miejsce wystawienia"
            inputRef={register}
            error={errors.createPlace}
            helperText={errors.createPlace?.message}
            defaultValue={invoice.createPlace}
          />
          <TextField
            className={classes.textField}
            id="sellDate"
            name="sellDate"
            type="date"
            label="Data sprzedaży"
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register}
            error={errors.sellDate}
            helperText={errors.sellDate?.message}
            defaultValue={invoice.sellDate}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => history.push(routes.itemsStep)}
          >
            Cofnij
          </Button>
          <Button className={classes.button} type="submit" variant="contained" color="primary">
            Dalej
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OthersStep;
