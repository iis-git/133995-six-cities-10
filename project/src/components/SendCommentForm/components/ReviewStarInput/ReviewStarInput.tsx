import React, {FC} from 'react';

export type ReviewStarInputProps = {
  title: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  index: string;
}
export const ReviewStarInput: FC<ReviewStarInputProps> = ({title, onChange, index}) => (
  <>
    <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" onChange={onChange}/>
    <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"/>
      </svg>
    </label>
  </>
);

