import React, {FC} from 'react';
import {StarInput} from './components/StarInput/StarInput';
import {Textarea} from './components/Textarea/Textarea';

export const CommentForm: FC = () => {
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

  const REVIEWS_LIST = [
    {
      starCount: '5',
      title: 'perfect'
    },
    {
      starCount: '4',
      title: 'good'
    },
    {
      starCount: '3',
      title: 'not bad'
    },
    {
      starCount: '2',
      title: 'badly'
    },
    {
      starCount: '1',
      title: 'terribly'
    }];


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEWS_LIST.map((item) => (
          <StarInput key={item.title} title={item.title} index={item.starCount} onChange={onReviewFormChange}/>
        ))}
      </div>
      <Textarea id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onReviewFormChange}/>
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
