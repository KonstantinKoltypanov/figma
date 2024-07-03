import { HeadersTypography } from '@/Components/atoms/Headers/HeadersTypography'
import { FeedbackCard } from '@/Components/molecules/FeedbackCard/FeedbackCard'
import * as style from './SectionEight.module.scss'
import Slider from '@/assets/Slider.svg'
import React from 'react'

export const SectionEight = () => {
  return (
    <section className={style.section}>
        
        <HeadersTypography type='h2'>
            See what our trusted users Say
        </HeadersTypography>      
        <div className={style.stackFeedback}>
        <FeedbackCard
          content='“If you haven’t tried whitepace yet, you need to give it a shot for your next event.
          It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”'
          />     
        <FeedbackCard
          content='“If you haven’t tried whitepace yet, you need to give it a shot for your next event.
          It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”'
          /> 
          <FeedbackCard
          content='“If you haven’t tried whitepace yet, you need to give it a shot for your next event.
          It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”'
          />  
      </div>  
      <Slider />
    </section>
  )
}
