import React from 'react'
import Arrow from '@/assets/Icon.png'
import './ButtonArrow.module.scss'
import ButtonUI, { IButtonUI } from '@/Components/atoms/ButtonUI/ButtonUI'



export const ButtonArrow: React.FC<IButtonUI> = ({children, className}) => {
  return (
  <>
    <ButtonUI className={className}>
        <>
          {children}
          <img src={Arrow}></img>
      </>
    </ButtonUI>
  </>
    )
}
