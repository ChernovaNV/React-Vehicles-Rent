import React from 'react';

import './Button.scss'

export enum viewVar {
    text = 'Button--text',
    smallBase = 'Button--smallBase',
    smallMain = 'Button--smallMain',
    baseMain = 'Button--baseMain',
    fullMain = 'Button--fullMain',
}


interface IButton {
    children:React.ReactNode,

    className?: string,
    view: viewVar,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButton> = ({ children, className, view, onClick}) => {
    return (
        <button 
            className={`btn-reset Button  ${className} ${view}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;


