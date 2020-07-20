import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StepperBar from 'components/StepperBar/StepperBar';
import { useStyles } from 'theme/styles';
import { validationSchemaClient } from 'utils/validationSchema';
import { addClientData } from 'data/actions';
import { routes } from 'routes';

const ClientStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaClient),
  });
  const onSubmit = (data) => {
    dispatch(addClientData(data));
    history.push(routes.itemsStep);
  };

  const client = useSelector((state) => state.invoice.client);

  return (
    <div>
      <StepperBar activeStep={1} />
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.textField}
          id="name"
          name="name"
          label="Nabywca"
          inputRef={register}
          error={errors.name}
          helperText={errors.name?.message}
          defaultValue={client.name}
        />
        <TextField
          className={classes.textField}
          id="nip"
          name="nip"
          label="NIP nabywcy"
          inputRef={register}
          error={errors.nip}
          helperText={errors.nip?.message}
          defaultValue={client.nip}
        />
        <TextField
          className={classes.textField}
          id="street"
          name="street"
          label="Ulica"
          inputRef={register}
          error={errors.street}
          helperText={errors.street?.message}
          defaultValue={client.street}
        />
        <TextField
          className={classes.textField}
          id="city"
          name="city"
          label="Miasto"
          inputRef={register}
          error={errors.city}
          helperText={errors.city?.message}
          defaultValue={client.city}
        />
        <TextField
          className={classes.textField}
          id="postalCode"
          name="postalCode"
          label="Kod pocztowy"
          inputRef={register}
          error={errors.postalCode}
          helperText={errors.postalCode?.message}
          defaultValue={client.postalCode}
        />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => history.push(routes.sellerStep)}
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

export default ClientStep;
