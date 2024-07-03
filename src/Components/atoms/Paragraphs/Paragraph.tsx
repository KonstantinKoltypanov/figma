import React from 'react'
import './Paragraph.module.scss'


export interface IParagraph {
    children: React.ReactNode;
    color?: string
}

export const Paragraph: React.FC<IParagraph> = ({children, color}) => {
  return (
    <p style={{color: color}}>
          {children}
    </p>
  )
}
