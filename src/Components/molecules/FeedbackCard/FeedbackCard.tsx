import React from 'react'
import * as style from './Feedback.module.scss'
import { Paragraph } from '@/Components/atoms/Paragraphs/Paragraph'
import avatar from '@/assets/Avater 02.png'



export const FeedbackCard: React.FC<{content: string}>  = ({content}) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <img src={avatar} className={style.img}></img>
        <Paragraph >
          {content} 
        </Paragraph>
      </div>
    </div>
  )
}
