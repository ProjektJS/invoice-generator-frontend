import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { validationSchemaItems } from 'utils/validationSchemas';
import { addItemsData } from 'data/actions';
import { routes } from 'routes';
import { StepTemplate } from 'layouts';
import { Form, MultiFields } from 'components/Form';

const StyledTitle = styled(Typography)`
  margin-bottom: 20px;
`;

const ItemStep = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.invoice.items);
  const persons = useSelector((state) => state.invoice.persons);

  const defaultValues = {
    items: items.length !== 0 ? items : [{ name: '', quantity: '', unitPrice: '', VAT: '23' }],
  };

  const { register, control, handleSubmit, errors } = useForm({
    defaultValues,
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

  if (Object.entries(persons).length === 0) {
    return <Redirect to={routes.personsStep} />;
  }

  return (
    <StepTemplate activeStep={1}>
      <Form
        activeStep={1}
        previousStepRoute={routes.personsStep}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <StyledTitle variant="h5" component="h1" color="initial">
          Zakupione towary/usługi
        </StyledTitle>
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
          + dodaj
        </Button>
      </Form>
    </StepTemplate>
  );
};

export default ItemStep;
