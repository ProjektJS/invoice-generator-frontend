import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';
import { validationSchemaOthers } from 'utils/validationSchema';
import { addOthersData } from 'data/actions';
import { Form, Fields } from 'components/Form';
import { routes } from 'routes';

const OthersStep = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const fields = [
    { name: 'number', label: 'Numer' },
    { name: 'createDate', label: 'Data wystawienia', type: 'date' },
    { name: 'createPlace', label: 'Miejsce wystawienia' },
    { name: 'sellDate', label: 'Data sprzedaży', type: 'date' },
  ];

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchemaOthers),
  });
  const onSubmit = (data) => {
    dispatch(addOthersData(data));
    history.push(routes.finishStep);
  };

  const invoice = useSelector((state) => state.invoice);

  return (
    <Form
      activeStep={2}
      previousStep={routes.itemsStep}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <Typography variant="h5" component="h1" color="initial">
        Dane faktury
      </Typography>
      <Fields fields={fields} inputRef={register} errors={errors} state={invoice} />
    </Form>
  );
};

export default OthersStep;
