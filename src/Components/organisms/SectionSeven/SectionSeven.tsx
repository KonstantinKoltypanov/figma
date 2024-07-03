import React from 'react'
import image from '@/assets/Apps.png'
import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import * as style from './SectionSeven.module.scss'


export const SectionSeven = () => {
  return (
    <section className={style.section}>
          <img src={image}></img>      
          <HeroContainer
              title='Work with Your Favorite Apps Using whitepace'
              titleType='h2'
              colorHead='#FFFFFF'
              colorContent='#FFFFFF'
              content='Whitepace teams up with your favorite software.
              Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.'
              button='Read more'
              style={{
                container: style.container,
                groupText: style.groupText,
                button: style.button
              }}
          />
    </section>
  )
}
