import {CardProps, City} from './types';
import {store} from '../store';

export type InitialState = {
  city: City;
  offers: CardProps[] | [];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
