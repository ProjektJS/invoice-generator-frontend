import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import Grid from '@material-ui/core/Grid';
import { validationSchemaPersons } from 'utils/validationSchema';
import { addPersonsData } from 'data/actions';
import { routes } from 'routes';
import { Typography } from '@material-ui/core';
import Fields from '../Form/Fields';
import Form from '../Form/Form';

const PersonsStep = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sellerFields = [
    { name: 'sellerName', label: 'Sprzedawca' },
    { name: 'sellerNip', label: 'NIP sprzedawcy' },
    { name: 'sellerStreet', label: 'Ulica' },
    { name: 'sellerCity', label: 'Miasto' },
    { name: 'sellerPostalCode', label: 'Kod pocztowy' },
  ];

  const clientFields = [
    { name: 'clientName', label: 'Nabywca' },
    { name: 'clientNip', label: 'NIP Nabywcy' },
    { name: 'clientStreet', label: 'Ulica' },
    { name: 'clientCity', label: 'Miasto' },
    { name: 'clientPostalCode', label: 'Kod pocztowy' },
  ];

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaPersons),
  });

  const onSubmit = (data) => {
    dispatch(addPersonsData(data));
    history.push(routes.itemsStep);
  };

  const persons = useSelector((state) => state.invoice.persons);

  return (
    <Form activeStep={0} handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h1" color="initial">
            Dane sprzedawcy
          </Typography>
          <Fields fields={sellerFields} inputRef={register} errors={errors} state={persons} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h1" color="initial">
            Dane Nabywcy
          </Typography>
          <Fields fields={clientFields} inputRef={register} errors={errors} state={persons} />
        </Grid>
      </Grid>
    </Form>
  );
};

export default PersonsStep;
