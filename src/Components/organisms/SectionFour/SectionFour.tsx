import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import React from 'react'
import * as style from './SectionFour.module.scss'

export const SectionFour = () => {
  return (
    <section className={style.section}>
          <HeroContainer
              title='Your work, everywhere you are'
              titleType='h2'
              content='Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive.
              The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!'
              button='Try Taskey'
              colorContent='#FFFFFF'
              colorHead='#FFFFFF'
              style={{
                  container: style.container,
                  groupText: style.groupText,
                  button: style.button
                  
              }}
          />
    </section>
  )
}
