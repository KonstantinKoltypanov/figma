import React from 'react'
import { IParagraph } from '../Paragraph'
import * as style from './ParagraphP1.module.scss'



export const ParagraphP3: React.FC<IParagraph> = ({children, color}) => {
  return (
      <p className={style.p3} style={{color: color}}>
          {children}
      </p>
  )
}
