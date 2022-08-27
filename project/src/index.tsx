import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import {store} from './store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const AppData = {
  CARDS_COUNT: 3
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cardsCount={AppData.CARDS_COUNT}/>
    </Provider>
  </React.StrictMode>,
);

