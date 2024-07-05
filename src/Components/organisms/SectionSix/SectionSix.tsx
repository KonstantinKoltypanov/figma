import { HeadersTypography } from '@/Components/atoms/Headers/HeadersTypography'
import React from 'react'
import * as style from './SectionSix.module.scss'
import imgGoogle from '@/assets/Google.png'
import imgApple from '@/assets/Apple.png'
import imgSlack from '@/assets/Slack.png'
import imgMicrosoft from '@/assets/Microsoft.png'

export const SectionSix = () => {
  return (
    <section className={style.section}>
        <HeadersTypography type='h2' >
            Our sponsors      
        </HeadersTypography>
        <div className={style.imgContainer}>
              <img src={imgApple} alt="Apple" />
              <img src={imgMicrosoft} alt="Microsoft" />
              <img src={imgSlack} alt="Slack" />
              <img src={imgGoogle} alt="Google" />
          </div>
    </section>
  )
}
