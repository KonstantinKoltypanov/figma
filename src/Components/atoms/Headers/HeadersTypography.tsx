import React from 'react'
import './HeadersTypography.module.scss'


type TypeHeader = 'h1' | 'h2'

export interface IHeader {
    children: React.ReactNode,
    type?: TypeHeader,
    color?: string
    className?: string
}

export const HeadersTypography: React.FC<IHeader> = ({ type = 'h1', children, className, color }) => {
    return (
        <>
            {type === 'h1' ? <h1 style={{color: color}} className={className}>{children}</h1> : <h2  style={{color: color}}  className={className}>{children}</h2>}
        </>
    );
};