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



const Profile = () => {
    return(
        <div className='flex flex-col mx-auto my-12 w-80'>
            <div className='text-2xl m-auto my-4'>プロフィールを入力しましょう</div>
            <img src='/Profile.svg' className='w-20 my-2 mx-auto'></img>
            <div className='my-2'>
                <Input type='text' size='large' placeholder='入力してください' labletext='ニックネーム'></Input>
                <Input type='text' size='large' placeholder='入力してください' labletext='生年月日'></Input>
                <Input type='text' size='large' placeholder='入力してください' labletext='職業'></Input>
            </div>
            <div className='my-2'>
                <div className='text-lg m-auto my-4'>基本情報</div>
                <Input type='text' size='small' placeholder='郵便番号' labletext='郵便番号'></Input>
                <Input type='text' size='large' placeholder='住所を入力' labletext='住所'></Input>
                <Input type='text' size='large' placeholder='番地を入力' labletext='番地'></Input>
                <Input type='text' size='large' placeholder='建物を入力' labletext='建物名'></Input>
                <Input type='text' size='large' placeholder='電話番号' labletext='電話番号'></Input>
            </div>
            <button type='submit' className='my-2 mx-auto w-48 h-12 bg-cyan-400 rounded-full'>決定する</button>
            <button type='submit' className='my-2 mx-auto w-36 h-8 text-stone-400 border-solid border-2 rounded-full'>＜　やめる　</button>
        </div>
    )
}

export default Profile