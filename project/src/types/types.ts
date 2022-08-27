export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type ReviewsItem = {
  stars: number,
  comment: string,
  author: string,
  avatar: string,
};

export type CardProps = {
  title: string,
  id: string,
  price: number,
  type: string,
  imgSrc: string,
  rating: number,
  isPremium?: boolean,
};
