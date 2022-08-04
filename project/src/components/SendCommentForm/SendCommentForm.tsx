import React, {FC} from 'react';
import {ReviewStarInput} from '../ReviewStarInput/ReviewStarInput';

export const SendCommentForm: FC = () => {
  const [formData, setFormData] = React.useState({
    rating: null,
    review: '',
  });

  const updateFormState = () => {
    setFormData({
      rating: formData.rating,
      review: formData.review
    });
  };

  const onReviewFormChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const REVIEWS_LIST = ['terribly', 'badly', 'not bad', 'good', 'perfect'];


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {REVIEWS_LIST.map((item, index) => {
          const stars = (index + 1).toString();

          return (
            <ReviewStarInput key={item} title={item} index={stars} onChange={onReviewFormChange}/>
          );})}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onReviewFormChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="button" onClick={updateFormState}>Submit</button>
      </div>
    </form>
  );
};
