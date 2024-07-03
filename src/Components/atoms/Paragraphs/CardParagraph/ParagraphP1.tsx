import React from 'react'
import { IParagraph } from '../Paragraph'
import * as style from './ParagraphP1.module.scss'


export const ParagraphP1: React.FC<IParagraph> = ({color, children}) => {
  return (
    <p className={style.p1} style={{color: color}}>
        {children}  
    </p>
  )
}
