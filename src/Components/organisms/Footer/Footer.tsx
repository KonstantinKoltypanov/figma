import React from 'react'
import * as style from './Footer.module.scss'
import Logo from '@/assets/Logo.svg'
import icons from '@/assets/Social Icon.png'
import { LinkGroup } from '@/Components/molecules/LinkGroup/LinkGroup'
import { Paragraph } from '@/Components/atoms/Paragraphs/Paragraph'
import { HeroContainer } from '@/Components/molecules/HeroContainer/HeroContainer'
import { SelectLang } from '@/Components/molecules/SelectLang/SelectLang'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <div className={style.logoDescription}>
          <Logo className={style.svg} />
          <Paragraph color='#FFFFFF'>
          whitepace was created for the new ways we live and work. We make a better workspace around the world
          </Paragraph>
        </div>

        <LinkGroup
          title='Product'
          link1='Overview'
          link2='Pricing'
          link3='Customer stories'
        />
        <LinkGroup
          title='Resources'
          link1='Blog'
          link2='Guides & tutorials'
          link3='Help center'
        />
        <LinkGroup
          title='Company'
          link1='About us'
          link2='Careers'
          link3='Media kit'
        />

        <HeroContainer
          title='Try It Today'
          content='Get started for free. Add your whole team as your needs grow.'
          button='Start today' titleType={'h2'}
          colorContent='#FFFFFF'
          colorHead='#FFFFFF'
          style={{
          container: style.container,
          groupText: style.groupText,
          button: style.button,
        }}
        />
      </div>
      <div className={style.btm}>
        <div className={style.btmButtons}>
          <SelectLang />
          <a className={style.link}>Terms & privacy</a>
          <a className={style.link}>Security</a>
          <a className={style.link}>Status</a>
          <a className={style.link}>©2021 Whitepace LLC.</a>
        </div>
        <img src={icons}></img>
      </div>
    </footer>
  )
}
