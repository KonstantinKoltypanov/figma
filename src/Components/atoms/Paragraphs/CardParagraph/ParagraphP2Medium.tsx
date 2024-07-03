import React from 'react'
import { IParagraph } from '../Paragraph'
import * as style from './ParagraphP1.module.scss'


export const ParagraphP2Medium: React.FC<IParagraph> = ({children, color}) => {
  return (
      <p className={style.p2Medium} style={{color: color}}>
          {children}
      </p>
  )
}
