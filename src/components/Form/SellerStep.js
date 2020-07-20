import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StepperBar from 'components/StepperBar';
import { useStyles } from 'theme/styles';
import { validationSchemaSeller } from 'utils/validationSchema';
import { addSellerData } from 'data/actions';
import { routes } from 'routes';

const SellerStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaSeller),
  });
  const onSubmit = (data) => {
    dispatch(addSellerData(data));
    history.push(routes.clientStep);
  };

  const seller = useSelector((state) => state.invoice.seller);

  return (
    <div>
      <StepperBar activeStep={0} />
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.textField}
          id="name"
          name="name"
          label="Sprzedawca"
          inputRef={register}
          error={errors.name}
          helperText={errors.name?.message}
          defaultValue={seller.name}
        />
        <TextField
          className={classes.textField}
          id="nip"
          name="nip"
          label="NIP sprzedawcy"
          inputRef={register}
          error={errors.nip}
          helperText={errors.nip?.message}
          defaultValue={seller.nip}
        />
        <TextField
          className={classes.textField}
          id="street"
          name="street"
          label="Ulica"
          inputRef={register}
          error={errors.street}
          helperText={errors.street?.message}
          defaultValue={seller.street}
        />
        <TextField
          className={classes.textField}
          id="city"
          name="city"
          label="Miasto"
          inputRef={register}
          error={errors.city}
          helperText={errors.city?.message}
          defaultValue={seller.city}
        />
        <TextField
          className={classes.textField}
          id="postalCode"
          name="postalCode"
          label="Kod pocztowy"
          inputRef={register}
          error={errors.postalCode}
          helperText={errors.postalCode?.message}
          defaultValue={seller.postalCode}
        />
        <div className={classes.buttonContainer}>
          <Button className={classes.button} type="submit" variant="contained" color="primary">
            Dalej
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SellerStep;
