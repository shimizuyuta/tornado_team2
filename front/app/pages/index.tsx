import type { NextPage } from 'next'
import texts from '../texts/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faGlasses } from "@fortawesome/free-solid-svg-icons/faGlasses" 
// import { IconDefinition,library } from '@fortawesome/free-solid-svg-icons';
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
library.add(faGlasses as IconDefinition)
import Button from '../components/Button'
import React from 'react';

const Home = () => {
  return (
    <div className=''>
      <p>暫定的にコンポネントをおいてあるだけ</p>
      <Button text="決定する" style=" approve-btn px-8 py-2 "/>
      <Button text="次へ進む" style=" approve-btn px-8 py-2 "/>
      <Button text="申請する" style=" approve-btn px-14 py-2 "/>
      <Button text="オファーを受ける" style=" approve-btn px-8 py-2 "/>
      <Button text="プロデュース申請する" style=" approve-btn px-10 py-2 "/>
    </div>
  )
}

export default Home
