import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, useFieldArray } from 'react-hook-form';
import { validationSchemaItems } from 'utils/validationSchema';
import { addInvoiceData } from 'data/actions';
import { routes } from 'routes';
import { useStyles } from 'theme/styles';

const ItemStep = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, control, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaItems),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  const onSubmit = (data) => dispatch(addInvoiceData(data));

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id} className={classes.liContainer}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={() => remove(index)}
              >
                X
              </Button>
              <TextField
                className={classes.textField}
                id={`items[${index}].itemName`}
                name={`items[${index}].itemName`}
                label="Nazwa towaru"
                inputRef={register()}
                error={errors?.items?.[index]?.itemName}
                helperText={errors?.items?.[index]?.itemName?.message}
              />
              <TextField
                className={classes.textField}
                id={`items[${index}].quantity"`}
                name={`items[${index}].quantity`}
                label="ilość szt."
                inputRef={register()}
                error={errors?.items?.[index]?.quantity}
                helperText={errors?.items?.[index].quantity?.message}
              />
              <TextField
                className={classes.textField}
                id={`items[${index}].priceNetto`}
                name={`items[${index}].priceNetto`}
                label="Cena netto"
                inputRef={register()}
                error={errors?.items?.[index]?.priceNetto}
                helperText={errors?.items?.[index]?.priceNetto?.message}
              />
              <TextField
                className={classes.textField}
                id={`items[${index}].valueNetto`}
                name={`items[${index}].valueNetto`}
                label="Wartość netto"
                defaultValue="0.00"
                disabled
                inputRef={register()}
                error={errors?.items?.[index]?.valueNetto}
                helperText={errors?.items?.[index]?.valueNetto?.message}
              />
              <TextField
                className={classes.textField}
                id={`items[${index}].VAT`}
                name={`items[${index}].VAT`}
                label="Stawka VAT %"
                defaultValue="23"
                inputRef={register()}
                error={errors?.items?.[index]?.VAT}
                helperText={errors?.items?.[index]?.VAT?.message}
              />

              <TextField
                className={classes.textField}
                id={`items[${index}].amountVAT`}
                name={`items[${index}].amountVAT`}
                label="Kowta VAT"
                inputRef={register()}
                error={errors?.items?.[index]?.amountVAT}
                helperText={errors?.items?.[index]?.amountVAT?.message}
              />

              <TextField
                className={classes.textField}
                id={`items[${index}].valueBrutto`}
                name={`items[${index}].valueBrutto`}
                label="Wartość Brutto"
                defaultValue="0.00"
                disabled
                inputRef={register()}
                error={errors?.items?.[index]?.valueBrutto}
                helperText={errors?.items?.[index]?.valueBrutto?.message}
              />
            </li>
          );
        })}
      </ul>
      <section>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
            append({
              itemName: '',
              quantity: '',
              priceNetto: '',
              valueNetto: '',
              VAT: '',
              amountVAT: '',
              valueBrutto: '',
            });
          }}
        >
          Dodaj towar/usługę
        </Button>
      </section>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => history.push(routes.purchaserStep)}
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

export default ItemStep;
