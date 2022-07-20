export const Page404 = (): JSX.Element => (
  <>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
      <section className="container">
        <h1>404 Page not found :((</h1>{" "}
        <a className="header__nav-links" href="/">
          Вернуться на главную
        </a>
      </section>
    </main>
  </>
);
