import React from 'react';
import {Link} from 'react-router-dom';
import {CardProps} from '../../types/types';

type CardFavoriteProps = {
  offer: CardProps,
};

export const CardFavorite = (props:CardFavoriteProps): JSX.Element => {
  const {offer} = props;
  const link = `/offer/${offer.id}`;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={link}>
          <img className="place-card__image" src={offer.imgSrc} width="150" height="110" alt="Place"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};
