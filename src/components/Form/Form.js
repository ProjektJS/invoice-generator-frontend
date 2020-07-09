import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: '75vw',
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <TextField
        className={classes.textField}
        id="standard-basic"
        label="Numer"
        defaultValue="01/07/2020"
      />
      <TextField
        className={classes.textField}
        id="date"
        type="date"
        label="Data wystawienia"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField className={classes.textField} id="standard-basic" label="Miejsce wystawienia" />
      <TextField
        className={classes.textField}
        id="date"
        type="date"
        label="Data sprzedaży"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField className={classes.textField} id="standard-basic" label="Sprzedawca" />
      <TextField className={classes.textField} id="standard-basic" label="NIP sprzedawcy" />
      <TextField className={classes.textField} id="standard-basic" label="Ulica" />
      <TextField className={classes.textField} id="standard-basic" label="Miasto" />
      <TextField className={classes.textField} id="standard-basic" label="Kod pocztowy" />
      <TextField className={classes.textField} id="standard-basic" label="Nabywca" />
      <TextField className={classes.textField} id="standard-basic" label="NIP nabywcy" />
      <TextField className={classes.textField} id="standard-basic" label="Ulica" />
      <TextField className={classes.textField} id="standard-basic" label="Miasto" />
      <TextField className={classes.textField} id="standard-basic" label="Kod pocztowy" />
    </form>
  );
};

export default Form;
