import { useRouter } from 'next/router'
import React from 'react'
import Button from 'components/Button'

type starProps = {
  labelText: string
}

const Stars = ({ labelText }: starProps) => {
  const [cyan_idx, setidx] = React.useState(-1)
  let idxs = [0, 1, 2, 3, 4]
  return (
    <div className='mx-auto my-0'>
      <div className='text-lg ml-3 mt-4 tb-1'>{labelText}</div>
      <div className='flex-row mx-auto'>
        {idxs.map((idx) => {
          let starSrc = '/evaluate_star_grey.svg'
          if (idx <= cyan_idx) {
            starSrc = '/evaluate_star_cyan.svg'
          }
          return (
            <button
              className='relative w-14 h-14 mx-0'
              onClick={() => {
                setidx(idx)
              }}
            >
              <img src='/evaluate_rectangle.svg' className='w-14 h-14 absolute top-0 left-0'></img>
              <img src={starSrc} className='absolute top-3 left-3.5'></img>
            </button>
          )
        })}
      </div>
    </div>
  )
}

const Evaluate = () => {
  const router = useRouter()
  const userName = router.query.userName
  return (
    <div className='flex flex-col mx-auto my-12 w-80'>
      <div className='text-2xl m-auto mt-2 mb-0'>{userName + ' '}さんの</div>
      <div className='text-2xl m-auto mt-0 mb-2'>プロデュースはどうでしたか?</div>
      <img src='/Profile.svg' className='w-20 my-4 mx-auto'></img>

      <div className='mx-auto'>
        <Stars labelText='アドバイスの的確さ'></Stars>
        <Stars labelText='アドバイスのわかりやすさ'></Stars>
        <Stars labelText='センス'></Stars>
        <Stars labelText='返信のスピード'></Stars>
      </div>

      <div className='my-16 mx-auto'>
        <Button text='評価する' style='button-default' />
      </div>
    </div>
  )
}
export default Evaluate
