import { createAction } from '@reduxjs/toolkit';
import {CardProps, City} from '../types/types';

export const changeCity = createAction<City>('changeCity');

export const setOffers = createAction<CardProps[]>('setOffers');
