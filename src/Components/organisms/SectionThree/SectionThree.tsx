import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import * as style from './SectionThree.module.scss'
import React from 'react'

export const SectionThree = () => {
  return (
    <section className={style.section}>
          <HeroContainer
              title='Customise it to &shy; your needs'
              titleType='h2'
              content='Customise the app with plugins, custom themes and multiple
              text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.'
              button='Let’s Go' 
              style={{
                  container: style.container,
                  groupText: style.groupText,
                  button: style.button
              }}
          />
          <div className={style.img}>
              
          </div>
    </section>
  )
}
