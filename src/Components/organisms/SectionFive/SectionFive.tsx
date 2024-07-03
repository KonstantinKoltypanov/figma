import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import React from 'react'
import * as style from './SectionFive.module.scss'
import Image from '@/assets/Element.svg'

export const SectionFive = () => {
  return (
      <section className={style.section}>
          <HeroContainer
            title='100% your data'
            titleType='h2'
            content="The app is open source and your notes are saved to an open format, so you'll always have access to
            them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
              button='Read more'
              style={{
                container: style.container,
                groupText: style.groupText,
                button: style.button
              }}
          />
          <Image width={681} height={381.13}/>
    </section>
)
}
