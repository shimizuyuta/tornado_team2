import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ButtonProps = {
  text: string,
  style: string
}


const Button = ({ text, style }: ButtonProps) => {
  return <button className={style}>{text}</button>
}

export default Button
