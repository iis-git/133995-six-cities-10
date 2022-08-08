import React, {FC} from 'react';

export type ReviewTextAreaProps = {
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name: string;
  id: string;
}
export const Textarea: FC<ReviewTextAreaProps> = ({placeholder, name,id, onChange}) => (
  <textarea className="reviews__textarea form__textarea" id={id} name={name} placeholder={placeholder} onChange={onChange}/>
);

