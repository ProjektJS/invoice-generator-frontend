import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const MultiFields = ({ fields, errors, inputRef, remove, items }) => {
  return (
    <Grid container xs={12} spacing={2}>
      {fields.map((item, index) => (
        <Grid item xs={12} md={4}>
          <IconButton aria-label="delete">
            <DeleteIcon onClick={() => remove(index)} />
          </IconButton>
          <TextField
            fullWidth
            id={`items[${index}].name`}
            name={`items[${index}].name`}
            label="Nazwa towaru"
            inputRef={inputRef}
            error={errors?.items?.[index]?.name}
            helperText={errors?.items?.[index]?.name?.message}
            defaultValue={items[index]?.name}
          />
          <TextField
            fullWidth
            id={`items[${index}].quantity"`}
            name={`items[${index}].quantity`}
            label="ilość szt."
            inputRef={inputRef}
            error={errors?.items?.[index]?.quantity}
            helperText={errors?.items?.[index]?.quantity?.message}
            defaultValue={items[index]?.quantity}
          />
          <TextField
            fullWidth
            id={`items[${index}].unitPrice`}
            name={`items[${index}].unitPrice`}
            label="Cena jednostkowa"
            inputRef={inputRef}
            error={errors?.items?.[index]?.unitPrice}
            helperText={errors?.items?.[index]?.unitPrice?.message}
            defaultValue={items[index]?.unitPrice}
          />
          <TextField
            fullWidth
            id={`items[${index}].VAT`}
            name={`items[${index}].VAT`}
            label="Stawka VAT %"
            inputRef={inputRef}
            error={errors?.items?.[index]?.VAT}
            helperText={errors?.items?.[index]?.VAT?.message}
            defaultValue={items[index]?.VAT || '23'}
          />
        </Grid>
      ))}
    </Grid>
  );
};

MultiFields.propTypes = {
  fields: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  inputRef: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default MultiFields;
