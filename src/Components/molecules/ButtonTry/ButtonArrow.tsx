import React from 'react'
import Arrow from '@/assets/arrow.svg'
import './ButtonArrow.module.scss'
import ButtonUI, { IButtonUI } from '@/Components/atoms/ButtonUI/ButtonUI'



export const ButtonArrow: React.FC<IButtonUI> = ({children, className}) => {
  return (
  <>
    <ButtonUI className={className}>
      <>
        {children}
        <Arrow />      
      </>
    </ButtonUI>
  </>
    )
}
