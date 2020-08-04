import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'index.css';
import Root from 'views/Root';
import DeviceScreen from 'context';
import { store } from 'data/store';

const renderApp = () =>
  render(
    <Provider store={store}>
      <DeviceScreen>
        <Root />
      </DeviceScreen>
    </Provider>,
    document.getElementById('root'),
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../src/views/Root.js', renderApp);
}

renderApp();
