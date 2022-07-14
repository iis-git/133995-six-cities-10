import { MainScreen } from '../../pages/main/main';

type AppProps = {
  cardsCount: number
};

export const App =({cardsCount}:AppProps): JSX.Element => {
  return <MainScreen cardsCount={cardsCount} />;
};
