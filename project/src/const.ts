export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const REVIEWS_STARS = [
  {
    starCount: '5',
    title: 'perfect'
  },
  {
    starCount: '4',
    title: 'good'
  },
  {
    starCount: '3',
    title: 'not bad'
  },
  {
    starCount: '2',
    title: 'badly'
  },
  {
    starCount: '1',
    title: 'terribly'
  }];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

