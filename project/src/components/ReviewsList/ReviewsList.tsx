import React from 'react';
import {CommentForm} from '../CommentForm/CommentForm';
import {ReviewsItem} from './components/ReviewsItem/ReviewsItem';
import {TReviewsItem} from '../../types/types';

type ReviewsListProps = {
  reviews: TReviewsItem[];
};

export const ReviewsList = (props:ReviewsListProps): JSX.Element => {
  const {reviews} = props;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map(((review) => <ReviewsItem key={review.comment} review={review}/>))}
      </ul>
      <CommentForm/>
    </>
  );
};
