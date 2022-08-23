import React from 'react';

type ReviewTextAreaProps = {
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name: string;
  id: string;
};

export const Textarea = (props: ReviewTextAreaProps): JSX.Element => {
  const {placeholder, name, id, onChange} = props;

  return (
    <textarea
      className="reviews__textarea form__textarea"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

