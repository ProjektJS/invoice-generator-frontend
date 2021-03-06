import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import Typography from '@material-ui/core/Typography';
import { validationSchemaOthers } from 'utils/validationSchemas';
import { addOthersData } from 'data/actions';
import { StepTemplate } from 'layouts';
import { Form, Fields } from 'components/Form';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

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

  if (invoice.items.length === 0) {
    return <Redirect to={routes.itemsStep} />;
  }

  return (
    <StepTemplate activeStep={2}>
      <Form
        activeStep={2}
        previousStepRoute={routes.itemsStep}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <StyledWrapper>
          <Typography variant="h5" component="h1" color="initial">
            Dane faktury
          </Typography>
          <Fields fields={fields} inputRef={register} errors={errors} state={invoice} />
        </StyledWrapper>
      </Form>
    </StepTemplate>
  );
};

export default OthersStep;
