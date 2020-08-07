import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'index.css';
import { Root } from 'views';
import DeviceScreen from 'context';
import { store } from 'data/store';

ReactDOM.render(
  <Provider store={store}>
    <DeviceScreen>
      <Root />
    </DeviceScreen>
  </Provider>,
  document.getElementById('root'),
);
