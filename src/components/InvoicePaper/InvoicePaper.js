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
      <Typography variant="h6" component="h2" align="center">
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
      <Typography variant="h6" component="h2" align="center">
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
      <Typography variant="h6" component="h2" align="center">
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
      {invoice.items.map((item, index) => {
        const priceNetto = item.unitPrice * item.quantity;
        const valueTax = priceNetto * (item.VAT / 100);
        const priceBrutto = priceNetto + valueTax;

        return (
          <ul key={item.name}>
            <li>
              <Typography variant="h6" component="h2" align="center">
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
                Cena jednostkowa: {item?.unitPrice}PLN
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                VAT: {item.VAT}%
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                Netto: {priceNetto}PLN
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                Wartość podatku: {valueTax}PLN
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                Brutto: {priceBrutto}PLN
              </Typography>
            </li>
          </ul>
        );
      })}
    </Paper>
  );
};

export default InvoicePaper;
