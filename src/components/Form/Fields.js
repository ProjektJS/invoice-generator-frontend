import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Fields = ({ fields, inputRef, errors, state }) => {
  return fields.map(({ name, label, type }) => (
    <TextField
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
      margin="none"
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
