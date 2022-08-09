import React, {FC, useState} from 'react';
import {Card} from '../Card/Card';
import {CardProps} from '../App/App';

export type OffersListProps = {
  content: CardProps[],
  cardsCount?: number;
}
export const OffersList:FC<OffersListProps> = ({content, cardsCount = 0}) => {
  const [activeCard, setActiveCard] = useState<string>('1');

  return (
    <div className="cities__places-list places__list tabs__content">
      <span className="visually-hidden">{activeCard}</span>
      {content.map((offer, index) => !!cardsCount && index < cardsCount && <Card onMouseEnter={setActiveCard} key={offer.id} offer={offer} />)}
    </div>
  );
};
