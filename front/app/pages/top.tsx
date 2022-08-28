import Button from 'components/Button'

const TopPageHeader = () => {
  return (
    <div className='flex justify-between h-5 w-11/12 m-4'>
      <img src='/akanuke_logo.png' className=''></img>
      <div className='flex justify-end h-5 text-xs'>
        <button className='px-2 py-0.5'>ログイン</button>
        <button className='bg-main text-white px-2 py-0.5'>登録</button>
      </div>
    </div>
  )
}

const Top = () => {
  return (
    <div>
      <TopPageHeader></TopPageHeader>
      <div className=' flex flex-col justify-center'>
        <div className='relative w-full h-56 bg-cover' style={{ backgroundImage: 'url(/top.png)' }}>
          <div className='absolute top-20 right-10 text-lg text-center text-white font-bold'>
            いい感じの<br></br>キャッチコピー
          </div>
        </div>

        <div className='flex flex-col justify-center bg-topPageBg p-4'>
          <div className='text-sm text-center'>
            ファッション・美容のプロとマッチングして<br></br>あなたをカッコよく垢抜けさせるサービス
          </div>
          <img src='/akanuke_logo.png' className='h-10 w-fit mx-auto my-4'></img>
          <div className='mx-auto'>
            <Button text='会員登録する' style='button-register' />
          </div>
        </div>

        <div className='my-5'>
          <div className='text-xl font-bold text-center my-5'>akaknuke!とは？</div>
          <div className='flex flex-row justify-center h-20 my-5'>
            <img src='/gorilla_icon.png'></img>
            <img src='/cross.png' className='h-9 my-auto px-4'></img>
            <img src='/producer_icon.png'></img>
          </div>
          <div className='text-xs w-9/12 my-5 mx-auto'>
            垢抜けたいあなたと、垢抜けのお手伝いをしたいファッション・美容のプロであるプロデューサがマッチングし、二人三脚でカッコイイを目指しましょう！
          </div>
          <img src='/gorilla_produced_icon.png' className='h-20 mx-auto my-5'></img>
          <div className='text-xs w-9/12 my-5 mx-auto'>
            akanuke!では、ファッションだけでなく、髪型、眉毛、美容などあなたの全身をトータルプロデュース
            <br></br>(※ファッション、髪は必須、その他はオプションです)
          </div>
        </div>

        <div className='bg-topPageBg h-48 my-5'>
          <div className='w-11/12 mx-auto'>
            <div className='font-bold'>akanuke!Photo</div>
            <div className='flex flex-row justify-between'>
              <img src='/akanuke!Photo1.png'></img>
              <img src='/akanuke!Photo2.png'></img>
              <img src='/akanuke!Photo3.png'></img>
            </div>
          </div>
        </div>

        <div className='text-xm text-center font-bold my-5'>さあ、あなたも今日からakanuke!</div>
        <div className='mx-auto my-5'>
          <Button text='会員登録する' style='button-register' />
        </div>
      </div>
    </div>
  )
}
export default Top
