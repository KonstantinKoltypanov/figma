import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import React from 'react'
import * as style from './SectionOne.module.scss'

export const SectionOne = () => {
    return (
    <section className={style.section}>
          <HeroContainer
              title='Get More Done with whitepace'
              titleType='h1'
              content='Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks'
              button='Try Whitepace free'
              style={
                    {
                      container: style.container,
                      groupText: style.groupText,
                      button: style.button
                    }
              }
            />
            <div className={style.img}>

            </div>
    </section>
  )
}
