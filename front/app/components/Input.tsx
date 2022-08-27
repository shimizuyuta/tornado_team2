import React from 'react'
type InputProps = {
    type: string
    size?: 'large' | 'small'
    placeholder: string
    labletext: string
}

const Input = ({type, size, placeholder, labletext}: InputProps)=> {
    return (
        <div className='my-4'>
            <div className='text-lg'>{labletext}</div>
            <input type={type} className={`h-12 ${size=='large'?'w-80':'w-40'} text-lg rounded bg-slate-200`} placeholder={placeholder}></input>
        </div>
    )
}
export default Input