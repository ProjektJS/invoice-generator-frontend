import axios from 'axios';
import {
  ADD_SELLER_DATA,
  ADD_CLIENT_DATA,
  ADD_ITEMS_DATA,
  ADD_OTHERS_DATA,
  ADD_INVOICE_DATA_RESPOND,
  ADD_INVOICE_DATA_FAILURE,
  ADD_INVOICE_DATA_SUCCESS,
} from 'data/actions/types';

export const addSellerData = (payload) => ({ type: ADD_SELLER_DATA, payload });
export const addClientData = (payload) => ({ type: ADD_CLIENT_DATA, payload });
export const addItemsData = (payload) => ({ type: ADD_ITEMS_DATA, payload });
export const addOthersData = (payload) => ({ type: ADD_OTHERS_DATA, payload });

export const addInvoiceData = () => (dispatch, getState) => {
  dispatch({ type: ADD_INVOICE_DATA_RESPOND });

  const { invoice } = getState();

  const sendData = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/invoice`, { ...invoice });

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
