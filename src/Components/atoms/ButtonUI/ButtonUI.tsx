import React from 'react'
import './ButtonUI.module.scss'

export interface IButtonUI {
    children: React.ReactNode,
    className?: string
}

const ButtonUI: React.FC<IButtonUI> = ({className, children}) => {
  return (
      <button className={className}>
        {children}  
      </button>
  )
}

export default ButtonUI
