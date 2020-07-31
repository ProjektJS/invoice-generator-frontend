import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { validationSchemaItems } from 'utils/validationSchema';
import { addItemsData } from 'data/actions';
import { routes } from 'routes';
import { Form, MultiFields } from 'components/Form';

const ItemStep = () => {
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
    <Form
      activeStep={1}
      previousStep={routes.personsStep}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <Grid container xs={12}>
        <Typography variant="h5" component="h1" color="initial">
          Zakupione towary/usługi
        </Typography>
        <MultiFields
          fields={fields}
          errors={errors}
          inputRef={register()}
          remove={remove}
          items={items}
        />
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
      </Grid>
    </Form>
  );
};

export default ItemStep;
