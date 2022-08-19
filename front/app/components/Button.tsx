import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ButtonProps = {
  text: string
  size?: 'small' | 'large'
}

const Button = ({ text, size }: ButtonProps) => {
  return <button className={'bg-main text-fontMain rounded-full px-8 py-2'}>{text}</button>
}

export default Button