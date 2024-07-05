import { Dropdown } from '@/Components/atoms/Dropdown/Dropdown'
import React from 'react'
import network from '@/assets/Network.png'
import * as style from './SelectLang.module.scss'

export const SelectLang = () => {
    return (
    <div className={style.language}>
        <img src={network}></img>
        <Dropdown  id='select'>
            English  
        </Dropdown>
    </div>
  )
}
