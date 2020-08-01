import { ADD_INVOICE_DATA_SUCCESS, ADD_INVOICE_DATA_RESPOND } from 'data/actions/types';

const initialState = {
  fileSrc: '',
};

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE_DATA_RESPOND: {
      return state;
    }
    case ADD_INVOICE_DATA_SUCCESS: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
