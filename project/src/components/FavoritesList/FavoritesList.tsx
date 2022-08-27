import React from 'react';
import {CardFavorite} from '../CardFavorite/CardFavorite';
import {CardProps} from '../../types/types';

type OffersListProps = {
  offers: CardProps[]
};

export const FavoritesList = (props: OffersListProps): JSX.Element => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardFavorite key={offer.id} offer={offer}/>)}
    </div>
  );
};

