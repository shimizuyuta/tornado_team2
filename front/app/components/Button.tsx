import React , { ButtonHTMLAttributes, FC, ReactNode } from 'react';

// type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: React.ReactNode;
// };
type Props = {
  text: string,
  style: string,
}

const Button = ({ text,style }: Props) => {
  console.log(text)
  return (
    <button
      className={`${style}`}
    >
      {text}
    </button>
  );
};

export default Button