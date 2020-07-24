import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useStyles } from 'theme/styles';

const InvoicePaper = () => {
  const classes = useStyles();

  const invoice = useSelector((state) => state.invoice);

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h4" align="center" component="h1" className={classes.title2}>
        Podgląd danych
      </Typography>
      <Typography variant="h5" component="h2" className={classes.title2}>
        Dane faktury
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Numer: {invoice?.number}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Data utworzenia: {invoice?.createDate}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Miejsce utworzenia: {invoice?.createPlace}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Data sprzedaży: {invoice?.sellDate}
      </Typography>
      <Typography variant="h5" component="h2" className={classes.title2}>
        Sprzedawca
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Sprzedawca: {invoice?.persons?.sellerName}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        NIP: {invoice?.persons?.sellerNip}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Ulica: {invoice?.persons?.sellerStreet}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Miasto: {invoice?.persons?.sellerCity}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Kod pocztowy: {invoice?.persons?.sellerPostalCode}
      </Typography>
      <Typography variant="h5" component="h2" className={classes.title2}>
        Nabywca
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Nabywca: {invoice?.persons?.clientName}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        NIP: {invoice?.persons?.clientNip}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Ulica: {invoice?.persons?.clientStreet}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Miasto: {invoice?.persons?.clientCity}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        Kod pocztowy: {invoice?.persons?.clientPostalCode}
      </Typography>
      {invoice.items.map((item, index) => (
        <ul key={item.name}>
          <li>
            <Typography variant="h5" component="h2" className={classes.title2}>
              Towar/Usługa nr.{index + 1}
            </Typography>
          </li>
          <li>
            <Typography vriant="subtitle1" color="textPraimary">
              Nazwa: {item?.name}
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" color="textPrimary">
              Ilość: {item?.quantity}
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" color="textPrimary">
              Cena jednostkowa: {item?.unitPrice}
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" color="textPrimary">
              VAT: {item.VAT}%
            </Typography>
          </li>
        </ul>
      ))}
    </Paper>
  );
};

export default InvoicePaper;
