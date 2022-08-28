import type { NextPage } from 'next'
import { faGlasses } from '@fortawesome/free-solid-svg-icons/faGlasses'
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
library.add(faGlasses as IconDefinition)
import Button from '../components/Button'
import Header from 'components/Header'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Header></Header>
      <p>暫定的にコンポネントをおいてあるだけ</p>
      <Button text='会員登録する' style="button-register"/>
      <Button text='プロフィールを編集する' style="button-editProfile"/>
      <Button text='決定する' style="button-default"/>
      <Button text='オファーを受ける' style="button-receiveOffer"/>
      <Button text='やめる' style="button-cancell"/>
      <Button text='メッセージを送る' style="button-sendMessage"/>
      <Button text='チャットをする' style="button-chat"/>
      <Button text='とじる' style="button-close"/>
      {/* <Button text='次へ進む' />
      <Button text='申請する' />
      <Button text='オファーを受ける' />
      <Button text='プロデュース申請する' /> */}
    </div>
  )
}

export default Home
