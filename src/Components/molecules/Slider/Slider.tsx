import React from 'react';
import * as style from './Slider.module.scss';

type TypeSlider = 'left' | 'right';

interface ISlider {
    type: TypeSlider;
}

export const Slider: React.FC<ISlider> = ({ type }) => {
    return (
        <button className={type === 'left' ? style.left : style.right}>
            {/* Button content can go here */}
        </button>
    );
};