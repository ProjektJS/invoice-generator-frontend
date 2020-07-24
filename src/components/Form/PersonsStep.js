import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StepperBar from 'components/StepperBar';
import { useStyles } from 'theme/styles';
import { validationSchemaPersons } from 'utils/validationSchema';
import { addPersonsData } from 'data/actions';
import { routes } from 'routes';
import { Typography } from '@material-ui/core';

const PersonsStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaPersons),
  });
  const onSubmit = (data) => {
    dispatch(addPersonsData(data));
    history.push(routes.itemsStep);
  };

  const persons = useSelector((state) => state.invoice.persons);

  return (
    <div>
      <StepperBar activeStep={0} />
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.innerFormContainer}>
          <div className={classes.fields}>
            <Typography variant="h4" component="h1" className={classes.innerTitle}>
              Dane sprzedawcy:
            </Typography>
            <TextField
              className={classes.textField}
              id="sellerName"
              name="sellerName"
              label="Sprzedawca"
              inputRef={register}
              error={errors.sellerName}
              helperText={errors.sellerName?.message}
              defaultValue={persons.sellerName}
            />
            <TextField
              className={classes.textField}
              id="sellerNip"
              name="sellerNip"
              label="NIP sprzedawcy"
              inputRef={register}
              error={errors.sellerNip}
              helperText={errors.sellerNip?.message}
              defaultValue={persons.sellerNip}
            />
            <TextField
              className={classes.textField}
              id="sellerStreet"
              name="sellerStreet"
              label="Ulica"
              inputRef={register}
              error={errors.sellerStreet}
              helperText={errors.sellerStreet?.message}
              defaultValue={persons.sellerStreet}
            />
            <TextField
              className={classes.textField}
              id="sellerCity"
              name="sellerCity"
              label="Miasto"
              inputRef={register}
              error={errors.sellerCity}
              helperText={errors.sellerCity?.message}
              defaultValue={persons.sellerCity}
            />
            <TextField
              className={classes.textField}
              id="sellerPostalCode"
              name="sellerPostalCode"
              label="Kod pocztowy"
              inputRef={register}
              error={errors.sellerPostalCode}
              helperText={errors.sellerPostalCode?.message}
              defaultValue={persons.sellerPostalCode}
            />
          </div>
          <div className={classes.fields}>
            <Typography variant="h4" component="h1" className={classes.innerTitle}>
              Dane nabywcy:
            </Typography>
            <TextField
              className={classes.textField}
              id="clientName"
              name="clientName"
              label="Nabywca"
              inputRef={register}
              error={errors.clientName}
              helperText={errors.clientName?.message}
              defaultValue={persons.clientName}
            />
            <TextField
              className={classes.textField}
              id="clientNip"
              name="clientNip"
              label="NIP nabywcy"
              inputRef={register}
              error={errors.clientNip}
              helperText={errors.clientNip?.message}
              defaultValue={persons.clientNip}
            />
            <TextField
              className={classes.textField}
              id="clientStreet"
              name="clientStreet"
              label="Ulica"
              inputRef={register}
              error={errors.clientStreet}
              helperText={errors.clientStreet?.message}
              defaultValue={persons.clientStreet}
            />
            <TextField
              className={classes.textField}
              id="clientCity"
              name="clientCity"
              label="Miasto"
              inputRef={register}
              error={errors.clientCity}
              helperText={errors.clientCity?.message}
              defaultValue={persons.clientCity}
            />
            <TextField
              className={classes.textField}
              id="clientPostalCode"
              name="clientPostalCode"
              label="Kod pocztowy"
              inputRef={register}
              error={errors.clientPostalCode}
              helperText={errors.clientPostalCode?.message}
              defaultValue={persons.clientPostalCode}
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button className={classes.button} type="submit" variant="contained" color="primary">
            Dalej
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonsStep;
