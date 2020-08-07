import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledTextField = styled(TextField)`
  margin-left: 10px;
`;

const StyledIconButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const MultiFields = ({ fields, errors, inputRef, remove, items }) => {
  return fields.map((item, index) => (
    <StyledWrapper>
      <StyledIconButton aria-label="delete">
        <DeleteIcon onClick={() => remove(index)} />
      </StyledIconButton>
      <StyledTextField
        id={`items[${index}].name`}
        name={`items[${index}].name`}
        label="Nazwa"
        inputRef={inputRef}
        error={errors?.items?.[index]?.name}
        helperText={errors?.items?.[index]?.name?.message}
        defaultValue={items[index]?.name}
        size="small"
      />

      <StyledTextField
        id={`items[${index}].quantity"`}
        name={`items[${index}].quantity`}
        label="ilość szt."
        inputRef={inputRef}
        error={errors?.items?.[index]?.quantity}
        helperText={errors?.items?.[index]?.quantity?.message}
        defaultValue={items[index]?.quantity}
        size="small"
      />

      <StyledTextField
        id={`items[${index}].unitPrice`}
        name={`items[${index}].unitPrice`}
        label="Cena jedn."
        inputRef={inputRef}
        error={errors?.items?.[index]?.unitPrice}
        helperText={errors?.items?.[index]?.unitPrice?.message}
        defaultValue={items[index]?.unitPrice}
        size="small"
      />

      <StyledTextField
        id={`items[${index}].VAT`}
        name={`items[${index}].VAT`}
        label="VAT %"
        inputRef={inputRef}
        error={errors?.items?.[index]?.VAT}
        helperText={errors?.items?.[index]?.VAT?.message}
        defaultValue={items[index]?.VAT || '23'}
        size="small"
      />
    </StyledWrapper>
  ));
};

MultiFields.propTypes = {
  fields: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  inputRef: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default MultiFields;
