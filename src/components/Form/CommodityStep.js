import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from 'theme/styles';
import { validationSchemaCommodity } from 'utils/validationSchema';
import { addInvoiceData } from 'data/actions';
import { routes } from 'routes';

const ComodityStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaCommodity),
  });
  const invoice = useSelector((state) => state.invoice);

  const onSubmit = (data) => {
    dispatch(addInvoiceData(data));
    history.push(routes.purchaserStep);
  };

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={classes.textField}
        id="invoiceNumber"
        name="invoiceNumber"
        label="Numer"
        inputRef={register}
        error={errors.invoiceNumber}
        helperText={errors.invoiceNumber?.message}
        defaultValue={invoice.invoiceNumber}
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
      <TextField
        className={classes.textField}
        id="dealer"
        name="dealer"
        label="Sprzedawca"
        inputRef={register}
        error={errors.dealer}
        helperText={errors.dealer?.message}
        defaultValue={invoice.dealer}
      />
      <TextField
        className={classes.textField}
        id="dealerNIP"
        name="dealerNIP"
        label="NIP sprzedawcy"
        inputRef={register}
        error={errors.dealerNIP}
        helperText={errors.dealerNIP?.message}
        defaultValue={invoice.dealerNIP}
      />
      <TextField
        className={classes.textField}
        id="dealerStreet"
        name="dealerStreet"
        label="Ulica"
        inputRef={register}
        error={errors.dealerStreet}
        helperText={errors.dealerStreet?.message}
        defaultValue={invoice.dealerStreet}
      />
      <TextField
        className={classes.textField}
        id="dealerCity"
        name="dealerCity"
        label="Miasto"
        inputRef={register}
        error={errors.dealerCity}
        helperText={errors.dealerCity?.message}
        defaultValue={invoice.dealerCity}
      />
      <TextField
        className={classes.textField}
        id="dealerPostCode"
        name="dealerPostCode"
        label="Kod pocztowy"
        inputRef={register}
        error={errors.dealerPostCode}
        helperText={errors.dealerPostCode?.message}
        defaultValue={invoice.dealerPostCode}
      />
      <div className={classes.buttonContainer}>
        <Button className={classes.button} type="submit" variant="contained" color="primary">
          Dalej
        </Button>
      </div>
    </form>
  );
};

export default ComodityStep;
