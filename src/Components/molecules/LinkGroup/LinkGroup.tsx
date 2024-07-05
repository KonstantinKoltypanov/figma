import * as style from './LinkGroup.module.scss'
import React from 'react'
import ParagraphP2Bold from '@/Components/atoms/Paragraphs/CardParagraph/ParagraphP2Bold'

interface ILinkGroup {
    title: string,
    link1: string,
    link2: string,
    link3: string
}


export const LinkGroup: React.FC<ILinkGroup> = ({title, link1, link2, link3}) => {
  return (
      <div className={style.linkContainer}>
          <ParagraphP2Bold color='#FFFFFF'>
              {title}
          </ParagraphP2Bold>
          <a className={style.link}>{link1}</a>
          <a className={style.link}>{link2}</a>
          <a className={style.link}>{link3}</a>
      </div>
  )
}
