import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledWrapper = styled.div`
  width: 85%;
  margin-bottom: auto;
`;

const StyledTitle = styled(Typography)`
  width: 100%;
  margin-bottom: 20px;
`;

const InvoicePaper = () => {
  const invoice = useSelector((state) => state.invoice);

  return (
    <StyledWrapper>
      <StyledTitle variant="h5" component="h1" align="center">
        Dane faktury
      </StyledTitle>
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
      <StyledTitle variant="h5" component="h1" align="center">
        Sprzedawca
      </StyledTitle>
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
      <StyledTitle variant="h5" component="h1" align="center">
        Nabywca
      </StyledTitle>
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
              <StyledTitle variant="h5" component="h1" align="center">
                Towar/Usługa nr.{index + 1}
              </StyledTitle>
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
                Cena jednostkowa: {parseFloat(item?.unitPrice).toFixed(2)} PLN
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                VAT: {item.VAT} %
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                Netto: {parseFloat(priceNetto).toFixed(2)} PLN
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                Wartość podatku: {parseFloat(valueTax).toFixed(2)} PLN
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1" color="textPrimary">
                Brutto: {parseFloat(priceBrutto).toFixed(2)} PLN
              </Typography>
            </li>
          </ul>
        );
      })}
    </StyledWrapper>
  );
};

export default InvoicePaper;
