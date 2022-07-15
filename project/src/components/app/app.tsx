import { MainScreen } from "../../pages/main/main";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { Login } from "../../pages/login/login";
import { Favorites } from "../../pages/favorites/favorites";
import { Page404 } from "../../pages/page404/main";
import { PrivateRoute } from "../private-route/app";

type AppProps = {
  cardsCount: number;
};

export const App = ({ cardsCount }: AppProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen cardsCount={cardsCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<MainScreen cardsCount={cardsCount} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
