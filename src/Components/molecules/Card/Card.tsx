import React from 'react'
import { CardTitle } from '../CardTitle/CardTitle'
import { CardElement } from '../CardElement/CardElement'
import * as style from './Card.module.scss'
import ButtonUI from '@/Components/atoms/ButtonUI/ButtonUI'

export const Card = () => {
  return (
    <div className={style.card}>
          <CardTitle
              title='Personal'
              price='46.99'
              description="it's very good product"
          />
          <div className={style.elementContainer}>
          <CardElement children='5454454' className={style.element} />
      </div>
      
      <ButtonUI className={style.button}>
        Get Started
      </ButtonUI>
    </div>
  )
}
