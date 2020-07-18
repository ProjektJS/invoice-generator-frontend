import * as yup from 'yup';

export const validationSchemaCommodity = yup.object().shape({
  invoiceNumber: yup.string().required(),
  createDate: yup.date().required(),
  createPlace: yup.string().required(),
  sellDate: yup.date().required(),
  dealer: yup.string().required(),
  dealerNIP: yup.string().required(),
  dealerStreet: yup.string().required(),
  dealerCity: yup.string().required(),
  dealerPostCode: yup.string().required(),
});

export const validationSchemaPurchaser = yup.object().shape({
  purchaserNIP: yup.string().required(),
  purchaserStreet: yup.string().required(),
  purchaserCity: yup.string().required(),
  purchaserPostCode: yup.string().required(),
});

export const validationSchemaItems = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      itemName: yup.string().required(),
      quantity: yup.string().required(),
      priceNetto: yup.string().required(),
      valueNetto: yup.string().required(),
      VAT: yup.string().required(),
      amountVAT: yup.string().required(),
      valueBrutto: yup.string().required(),
    }),
  ),
});
