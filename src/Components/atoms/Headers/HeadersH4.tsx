import React from 'react'
import { IHeader } from './HeadersTypography'
import './HeadersTypography.module.scss'


export const HeadersH4: React.FC<IHeader> = ({children, className, color}) => {
  return (
      <h4 className={className} color={color}>
          {children}
      </h4>
  )
}
