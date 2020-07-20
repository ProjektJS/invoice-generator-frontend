import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import StepperBar from 'components/StepperBar';
import { validationSchemaItems } from 'utils/validationSchema';
import { addItemsData } from 'data/actions';
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
  const onSubmit = (data) => {
    dispatch(addItemsData(data.items));
    history.push(routes.othersStep);
  };

  const items = useSelector((state) => state.invoice.items);

  return (
    <div>
      <StepperBar activeStep={2} />
      <form position="static" className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id} className={classes.liContainer}>
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => remove(index)} />
                </IconButton>
                <TextField
                  className={classes.textField}
                  id={`items[${index}].name`}
                  name={`items[${index}].name`}
                  label="Nazwa towaru"
                  inputRef={register()}
                  error={errors?.items?.[index]?.name}
                  helperText={errors?.items?.[index]?.name?.message}
                  defaultValue={items[index]?.name}
                />
                <TextField
                  className={classes.textField}
                  id={`items[${index}].quantity"`}
                  name={`items[${index}].quantity`}
                  label="ilość szt."
                  inputRef={register()}
                  error={errors?.items?.[index]?.quantity}
                  helperText={errors?.items?.[index]?.quantity?.message}
                  defaultValue={items[index]?.quantity}
                />
                <TextField
                  className={classes.textField}
                  id={`items[${index}].unitPrice`}
                  name={`items[${index}].unitPrice`}
                  label="Cena jednostkowa"
                  inputRef={register()}
                  error={errors?.items?.[index]?.unitPrice}
                  helperText={errors?.items?.[index]?.unitPrice?.message}
                  defaultValue={items[index]?.unitPrice}
                />

                <TextField
                  className={classes.textField}
                  id={`items[${index}].VAT`}
                  name={`items[${index}].VAT`}
                  label="Stawka VAT %"
                  inputRef={register()}
                  error={errors?.items?.[index]?.VAT}
                  helperText={errors?.items?.[index]?.VAT?.message}
                  defaultValue={items[index]?.VAT || '23'}
                />
              </li>
            );
          })}
        </ul>
        <Button
          variant="secondary"
          onClick={() => {
            append({
              name: '',
              quantity: '',
              unitPrice: '',
              VAT: '',
            });
          }}
        >
          Dodaj nowy towar/usługę
        </Button>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => history.push(routes.clientStep)}
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

export default ItemStep;
