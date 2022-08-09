import React, {FC} from 'react';
import {OffersList} from '../../components/OffersList/OffersList';
import {CardProps} from '../../components/App/App';
import {FavoritesList} from '../../components/FavoritesList/FavoritesList';
import {Link} from 'react-router-dom';

type FavoritesProps = {
  offers: CardProps[]
}

export const Favorites:FC<FavoritesProps> = ({offers}) => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/">
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <OffersList content={offers} />
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/">
                    <span>Cologne</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesList offers={offers} />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  </div>
);
