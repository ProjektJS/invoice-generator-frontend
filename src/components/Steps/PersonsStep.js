import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers';
import { validationSchemaPersons } from 'utils/validationSchemas';
import { addPersonsData } from 'data/actions';
import { routes } from 'routes';
import { Typography } from '@material-ui/core';
import { StepTemplate } from 'templates';
import Fields from '../Form/Fields';
import Form from '../Form/Form';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 5px;
`;

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
    <StepTemplate activeStep={0}>
      <Form activeStep={0} handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <StyledWrapper>
          <InnerWrapper>
            <StyledTitle variant="h5" component="h1" color="initial" align="left">
              Dane sprzedawcy
            </StyledTitle>
            <Fields fields={sellerFields} inputRef={register} errors={errors} state={persons} />
          </InnerWrapper>
          <InnerWrapper>
            <StyledTitle variant="h5" component="h1" color="initial" align="left">
              Dane nabywcy
            </StyledTitle>
            <Fields fields={clientFields} inputRef={register} errors={errors} state={persons} />
          </InnerWrapper>
        </StyledWrapper>
      </Form>
    </StepTemplate>
  );
};

export default PersonsStep;
