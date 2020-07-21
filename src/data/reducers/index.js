import { combineReducers } from 'redux';
import { invoiceReducer } from 'data/reducers/invoiceReducer';
import { fileReducer } from 'data/reducers/fileReducer';

const rootReducer = combineReducers({ invoice: invoiceReducer, file: fileReducer });

export default rootReducer;
