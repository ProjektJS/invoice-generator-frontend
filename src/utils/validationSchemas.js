import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Pole wymagane!',
    notType: 'Nieprawidłowy typ danych!',
  },
  number: {
    default: 'Wymagane cyfry!',
  },
});

export const validationSchemaPersons = yup.object().shape({
  sellerName: yup.string().required(),
  sellerNip: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Wymagane 10 znaków!')
    .required(),
  sellerStreet: yup.string().required(),
  sellerCity: yup.string().required(),
  sellerPostalCode: yup
    .string()
    .matches(/^[0-9]{2}(?:-[0-9]{3})?$/, 'Wymagane 6 znaków!')
    .required(),
  clientName: yup.string().required(),
  clientNip: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Wymagane 10 znaków!')
    .required(),
  clientStreet: yup.string().required(),
  clientCity: yup.string().required(),
  clientPostalCode: yup
    .string()
    .matches(/^[0-9]{2}(?:-[0-9]{3})?$/, 'Wymagane 6 znaków!')
    .required(),
});

export const validationSchemaItems = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      quantity: yup.number().required(),
      unitPrice: yup.number().required(),
      VAT: yup.number().required(),
    }),
  ),
});

export const validationSchemaOthers = yup.object().shape({
  createPlace: yup.string().required(),
  createDate: yup.string().required(),
  sellDate: yup.string().required(),
  number: yup.string().required(),
});
