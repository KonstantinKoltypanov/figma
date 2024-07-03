import { TextGroup } from '@/Components/molecules/textGroup'
import React from 'react'
import * as style from './SectionPrice.module.scss'
import { Card } from '@/Components/molecules/Card/Card'

export const SectionPrice = () => {
  return (
    <section className={style.section}>
      <TextGroup
      title='Choose Your Plan'
      titleType='h2'
      content='Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.'
      style={style.groupText}             
      />      
      <div className={style.cardContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
