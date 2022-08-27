import React, {MouseEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import {City} from '../../types/types';
import {CITY} from '../../const';

type CitiesListProps = {
  cities: {
    title: string,
    lat: number,
    lng: number,
    zoom: number,
  }[];
};

export const CitiesList = (props: CitiesListProps): JSX.Element => {
  const {cities} = props;
  const dispatch = useAppDispatch();
  const [activeCity, setActiveCity] = useState<string>(CITY.title);

  const onLinkClick = (evt: MouseEvent<HTMLAnchorElement>, city: City) => {
    evt.preventDefault();
    dispatch(changeCity(city));
    setActiveCity(city.title);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.title} className="locations__item">
          <Link onClick={(evt) => onLinkClick(evt, city)} className={`locations__item-link tabs__item ${activeCity === city.title && ' tabs__item--active'} `} to="/">
            <span>{city.title}</span>
          </Link>
        </li>))}
    </ul>
  );
};

