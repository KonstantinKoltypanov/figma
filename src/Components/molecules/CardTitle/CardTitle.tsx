import { HeadersH4 } from '@/Components/atoms/Headers/HeadersH4'
import { ParagraphP1 } from '@/Components/atoms/Paragraphs/CardParagraph/ParagraphP1'
import { Paragraph } from '@/Components/atoms/Paragraphs/Paragraph'
import * as style from './CardTitle.module.scss'
import React from 'react'

interface ICardTitle {
    title: string,
    price: string,
    description: string,
}

export const CardTitle: React.FC<ICardTitle> = ({title, price, description}) => {
  return (
    <div className={style.cardTitle}>
          <ParagraphP1>
              {title}
          </ParagraphP1>
          <HeadersH4>
              {`$${price}`}
          </HeadersH4>
          <Paragraph>
              {description}
          </Paragraph>
    </div>
  )
}
