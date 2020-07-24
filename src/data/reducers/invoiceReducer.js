import { ADD_PERSONS_DATA, ADD_ITEMS_DATA, ADD_OTHERS_DATA } from 'data/actions/types';

const initialState = {
  persons: [],
  items: [],
  createPlace: '',
  createDate: '',
  sellDate: '',
  number: '',
};

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSONS_DATA: {
      return { ...state, persons: { ...action.payload } };
    }
    case ADD_ITEMS_DATA: {
      return { ...state, items: [...action.payload] };
    }
    case ADD_OTHERS_DATA: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
