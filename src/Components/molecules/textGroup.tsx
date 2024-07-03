import React from 'react'
import { HeadersTypography } from '../atoms/Headers/HeadersTypography';
import { Paragraph } from '../atoms/Paragraphs/Paragraph';

interface IHeroContainerProps {
    title: string;
    content: string;
    style: string
    button?: string;
  colorContent?: string
  colorHead?: string
    titleType: 'h1' | 'h2'
}


export const TextGroup: React.FC<IHeroContainerProps> = ({style, title, titleType, colorContent, content,colorHead}) => {
  return (
     <div className = {style}>
      <HeadersTypography color={colorHead}type={titleType}>{title}</HeadersTypography>
            <Paragraph color={colorContent}>{content}</Paragraph>
          </div>
  )
}
