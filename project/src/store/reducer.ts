import { createReducer } from '@reduxjs/toolkit';
import { CITY } from '../const';
import { InitialState } from '../types/state';
import { changeCity, setOffers } from './action';

const initialState: InitialState = {
  city: CITY,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
