import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {useMap} from '../../hooks/useMap';
import {City, Point} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Point[];
  selectedPoint?: Point | undefined;
};

export const Map = (props: MapProps): JSX.Element => {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const checkIsIconActive = (activePoint: Point | undefined, point: Point) => new Icon({
    iconUrl: selectedPoint !== undefined && point.title === selectedPoint.title ? URL_MARKER_CURRENT : URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(checkIsIconActive(selectedPoint, point))
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
};


