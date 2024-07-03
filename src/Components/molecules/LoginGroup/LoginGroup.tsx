import ButtonUI from '@/Components/atoms/ButtonUI/ButtonUI'
import React from 'react'
import { ButtonArrow } from '../ButtonTry/ButtonArrow'
import * as style from './LoginGroup.module.scss'

export const LoginGroup = () => {
  return (
      <div className={style.loginGroup}>
          <ButtonUI className={style.login}>
              Login
          </ButtonUI>
          <ButtonArrow className={style.try}>
              Try Whitepace free
          </ButtonArrow>
      </div>
  )
}
