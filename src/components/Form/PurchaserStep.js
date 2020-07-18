import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from 'theme/styles';
import { validationSchemaPurchaser } from 'utils/validationSchema';
import { addInvoiceData } from 'data/actions';
import { routes } from 'routes';

const PurchaserStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaPurchaser),
  });
  const invoice = useSelector((state) => state.invoice);

  const onSubmit = (data) => {
    dispatch(addInvoiceData(data));
    history.push(routes.itemsStep);
  };

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={classes.textField}
        id="purchaser"
        name="purchaser"
        label="Nabywca"
        inputRef={register}
        error={errors.invoiceNumber}
        helperText={errors.purchaser?.message}
        defaultValue={invoice.purchaser}
      />
      <TextField
        className={classes.textField}
        id="purchaserNIP"
        name="purchaserNIP"
        label="NIP nabywcy"
        inputRef={register}
        error={errors.purchaserNIP}
        helperText={errors.purchaserNIP?.message}
        defaultValue={invoice.purchaserNIP}
      />
      <TextField
        className={classes.textField}
        id="purchaserStreet"
        name="purchaserStreet"
        label="Ulica"
        inputRef={register}
        error={errors.purchaserStreet}
        helperText={errors.purchaserStreet?.message}
        defaultValue={invoice.purchaserStreet}
      />
      <TextField
        className={classes.textField}
        id="purchaserCity"
        name="purchaserCity"
        label="Miasto"
        inputRef={register}
        error={errors.purchaserCity}
        helperText={errors.purchaserCity?.message}
        defaultValue={invoice.purchaserCity}
      />
      <TextField
        className={classes.textField}
        id="purchaserPostCode"
        name="purchaserPostCode"
        label="Kod pocztowy"
        inputRef={register}
        error={errors.purchaserPostCode}
        helperText={errors.purchaserPostCode?.message}
        defaultValue={invoice.purchaserPostCode}
      />
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => history.push(routes.commodityStep)}
        >
          Cofnij
        </Button>
        <Button className={classes.button} type="submit" variant="contained" color="primary">
          Dalej
        </Button>
      </div>
    </form>
  );
};

export default PurchaserStep;
