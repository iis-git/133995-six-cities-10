import React, {useState} from 'react';
import {Card} from '../Card/Card';
import {TCardProps} from '../../types/types';

type OffersListProps = {
  content: TCardProps[],
  cardsCount?: number;
};

export const OffersList = (props: OffersListProps): JSX.Element => {
  const {content, cardsCount = 0} = props;
  const [activeCard, setActiveCard] = useState<string>('1');

  return (
    <div className="cities__places-list places__list tabs__content">
      <span className="visually-hidden">{activeCard}</span>
      {content.map((offer, index) => !!cardsCount && index < cardsCount && <Card onMouseEnter={setActiveCard} key={offer.id} offer={offer} />)}
    </div>
  );
};
