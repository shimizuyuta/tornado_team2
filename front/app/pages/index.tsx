import type { NextPage } from 'next'
import Button from 'components/Button'

const Home: NextPage = () => {
  return (
    <div className=''>
      <p>暫定的にコンポネントをおいてあるだけ</p>
      <Button text='決定する' />
      <Button text='次へ進む' />
      <Button text='申請する' />
      <Button text='オファーを受ける' />
      <Button text='プロデュース申請する' />
    </div>
  )
}

export default Home
