import React from 'react'
import * as style from './ParagraphP1.module.scss'
import { IParagraph } from '../Paragraph'

const ParagraphP2Bold:React.FC<IParagraph> = ({children}) => {
  return (
    <p className={style.bold}> 
          {children}
    </p>
  )
}

export default ParagraphP2Bold