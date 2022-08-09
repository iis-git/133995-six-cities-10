import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const AppData = {
  CARDS_COUNT: 3,
  offers
};

root.render(
  <React.StrictMode>
    <App cardsCount={AppData.CARDS_COUNT} offers={AppData.offers}/>
  </React.StrictMode>,
);

