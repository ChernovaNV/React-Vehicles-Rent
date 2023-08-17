import React, { ButtonHTMLAttributes, memo } from 'react';

import './Button.scss'

export enum ButtonTheme {
    text = 'Button__text',
    base = 'Button__baseBgColor',
    accent = 'Button__accentBgColor',
}
export enum ButtonSize {
    small = 'Button__smallSize',
    base = 'Button__baseSize',
    full = 'Button__fullSize',
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    size?: ButtonSize, 
    disabled?: boolean 
}

export const Button: React.FC<ButtonProps> = memo(({
    children, 
    className, 
    theme = ButtonTheme.accent, 
    size = ButtonSize.base,
    disabled,
    ...otherProps
}: ButtonProps) => {

    const classNames = [
        'Button', 
        className, 
        size,
        theme
    ].join(" ");
    
    return (
        <button 
            className={classNames}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});


