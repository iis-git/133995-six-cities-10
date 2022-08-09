import React, {FC} from 'react';
import {CardProps} from '../App/App';
import {CardFavorite} from '../CardFavorite/CardFavorite';

export type OffersListProps = {
  offers: CardProps[]
}
export const FavoritesList: FC<OffersListProps> = ({content}) => (
  <div className="cities__places-list places__list tabs__content">
    {content.map((offer, index) => <CardFavorite key={offer.id} offer={offer}/>)}
  </div>
);

