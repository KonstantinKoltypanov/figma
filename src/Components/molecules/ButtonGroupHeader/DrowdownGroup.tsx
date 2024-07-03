import React from 'react'

import { Dropdown } from '../../atoms/Dropdown/Dropdown'

import * as style from "./DrowdownGroup.module.scss"


export const ButtonGroupHeader = () => {
  return (
    <div className={style.buttonGroup}>
      <div className={style.dropdownGroup}>
        <Dropdown id={'products'}>Products</Dropdown>
        <Dropdown id={'solutions'}>Solutions</Dropdown>
        <Dropdown id={'resources'}>Resources</Dropdown>
        <Dropdown id={'pricing'}>Pricing</Dropdown>
      </div>
    </div>
  )
}
