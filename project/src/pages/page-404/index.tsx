import {Link} from 'react-router-dom';

export const Page404 = (): JSX.Element => (
  <>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
      <section className="container">
        <h1>404 Page not found :((</h1>
        <Link className="header__nav-links" to="/">
          Вернуться на главную
        </Link>
      </section>
    </main>
  </>
);
