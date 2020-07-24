import axios from 'axios';
import {
  ADD_PERSONS_DATA,
  ADD_ITEMS_DATA,
  ADD_OTHERS_DATA,
  ADD_INVOICE_DATA_RESPOND,
  ADD_INVOICE_DATA_FAILURE,
  ADD_INVOICE_DATA_SUCCESS,
} from 'data/actions/types';

export const addPersonsData = (payload) => ({ type: ADD_PERSONS_DATA, payload });
export const addItemsData = (payload) => ({ type: ADD_ITEMS_DATA, payload });
export const addOthersData = (payload) => ({ type: ADD_OTHERS_DATA, payload });

export const addInvoiceData = () => (dispatch, getState) => {
  dispatch({ type: ADD_INVOICE_DATA_RESPOND });

  const { invoice } = getState();

  const dataToSend = {
    seller: {
      name: invoice.persons.sellerName,
      nip: invoice.persons.sellerNip,
      street: invoice.persons.sellerStreet,
      city: invoice.persons.sellerCity,
      postalCode: invoice.persons.sellerPostalCode,
    },
    client: {
      name: invoice.persons.clientName,
      nip: invoice.persons.clientNip,
      street: invoice.persons.clientStreet,
      city: invoice.persons.clientCity,
      postalCode: invoice.persons.clientPostalCode,
    },
    createPlace: invoice.createPlace,
    createDate: invoice.createDate,
    sellDate: invoice.sellDate,
    number: invoice.number,
    items: [...invoice.items],
  };

  const sendData = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/invoice`, { ...dataToSend });

      if (res) {
        dispatch({
          type: ADD_INVOICE_DATA_SUCCESS,
          payload: { fileSrc: `data:application/pdf;base64,${res.data}` },
        });
      }
    } catch (error) {
      dispatch({ type: ADD_INVOICE_DATA_FAILURE, error });
    }
  };
  sendData();
};
