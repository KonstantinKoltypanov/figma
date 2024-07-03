import { ButtonArrow } from '@/Components/molecules/ButtonTry/ButtonArrow'
import React from 'react'
import { TextGroup } from '../textGroup';

interface IHeroContainerProps {
  title: string;
  content: string;
  style?: {
    container?: string;
    groupText?: string;
    button?: string;
  };
  button: string;
  colorContent?: string
  colorHead?: string
  titleType: 'h1' | 'h2'
}


export const HeroContainer: React.FC<IHeroContainerProps> = ({style = {}, title,titleType, content, button, colorContent = '#212529', colorHead}) => {
  return (
    <div className={`container ${style.container}`}>
      <TextGroup
        title={title}
        titleType={titleType}
        content={content}
        colorContent={colorContent}
        colorHead={colorHead}
        style={style.groupText}
      />
      <ButtonArrow className={style.button}>
        {button}
      </ButtonArrow>
    </div>
  )
}
