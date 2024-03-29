import { MainScreen } from '../../pages/main';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Login } from '../../pages/login';
import { Favorites } from '../../pages/favorites';
import { Page404 } from '../../pages/page-404';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import {Offer} from '../../pages/offer';
import {CardProps} from '../../types/types';

type AppProps = {
  cardsCount: number,
  offers: CardProps[];
};

export const App = (props: AppProps ): JSX.Element => {
  const {cardsCount, offers} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen cardsCount={cardsCount} offers={offers}/>}
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Offer offers={offers}/>}
        />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
};
