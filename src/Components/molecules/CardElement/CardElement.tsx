import React from 'react'
import Check from '@/assets/Icon.svg'
import * as style from './CardElement.module.scss'


export const CardElement: React.FC<{children: string, className: string}> = ({children, className}) => {
    return (
    <div className={style.element}>
        <Check />
        <p className={className}>
            {children} 
        </p>
    </div>
  )
}
