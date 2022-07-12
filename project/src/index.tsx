import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  CARDS_COUNT: 3,
};

root.render(
  <React.StrictMode>
    <App cardsCount={Setting.CARDS_COUNT}/>
  </React.StrictMode>,
);
