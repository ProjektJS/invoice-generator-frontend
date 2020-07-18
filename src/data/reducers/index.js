import { combineReducers } from 'redux';
import { invoiceReducer } from 'data/reducers/invoiceReducer';

const rootReducer = combineReducers({ invoice: invoiceReducer });

export default rootReducer;
