import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import React from 'react'
import * as style from './SectionTwo.module.scss'
import image from '@/assets/Work Together Image.png'

export const SectionTwo = () => {
  return (
   <section className={style.section}>
          <div className={style.topSection}>
              <HeroContainer
                  title='Project Management'
                  titleType='h2'
                  content='Images, videos, PDFs and audio files are supported.
                  Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.'
                  button='Get Started'
                  style={
                      {
                          container: style.topContainer,
                          groupText: style.topGroupText,
                          button: style.topButton,
                      }
                  }
              />
              <div className={style.topImg}>
                  
              </div>
          </div>
          <div className={style.bottomSection}>
              <img src={image} className={style.bottomImg}></img>
              <HeroContainer
                  title='Work together'
                  titleType='h2'
                  content='With whitepace, share your notes with your
                  colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.'
                  button='Try it now'
                  style={
                      {
                          container: style.bottomContainer,
                          groupText: style.bottomGroupText,
                          button: style.bottomButton,
                      }
                  }
              />
          </div>
   </section>
  )
}
