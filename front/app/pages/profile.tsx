import React from 'react'
import Input from 'components/Input'
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
                <Input type='text' size='small' placeholder='入力してください' labletext='郵便番号'></Input>
                <Input type='text' size='large' placeholder='入力してください' labletext='住所'></Input>
                <Input type='text' size='large' placeholder='入力してください' labletext='番地'></Input>
                <Input type='text' size='large' placeholder='入力してください' labletext='建物名'></Input>
                <Input type='text' size='large' placeholder='入力してください' labletext='電話番号'></Input>
            </div>
            <button type='submit' className='my-2 mx-auto w-48 h-12 bg-cyan-400 rounded-full'>決定する</button>
            <button type='submit' className='my-2 mx-auto w-36 h-8 text-stone-400 border-solid border-2 rounded-full'>＜　やめる　</button>
        </div>
    )
}

export default Profile