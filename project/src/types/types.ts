export type TCity = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type TPoint = {
  title: string;
  lat: number;
  lng: number;
};

export type TReviewsItem = {
  stars: number,
  comment: string,
  author: string,
  avatar: string,
};

export type TCardProps = {
  title: string,
  id: string,
  price: number,
  type: string,
  imgSrc: string,
  rating: number,
  isPremium?: boolean,
};
