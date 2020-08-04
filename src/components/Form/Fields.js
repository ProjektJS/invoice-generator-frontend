import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const Fields = ({ fields, inputRef, errors, state }) => {
  return fields.map(({ name, label, type }) => (
    <StyledTextField
      key={name}
      id={name}
      name={name}
      label={label}
      type={type || 'text'}
      InputLabelProps={
        type === 'date' && {
          shrink: true,
        }
      }
      inputRef={inputRef()}
      error={errors[name]}
      helperText={errors[name]?.message}
      defaultValue={state[name]}
      size="small"
      fullWidth
    />
  ));
};

Fields.propTypes = {
  fields: PropTypes.array.isRequired,
  inputRef: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

export default Fields;
