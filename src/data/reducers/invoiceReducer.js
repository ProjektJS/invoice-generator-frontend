import { ADD_INVOICE_DATA_SUCCESS } from 'data/actions/types';

export const invoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_INVOICE_DATA_SUCCESS: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
