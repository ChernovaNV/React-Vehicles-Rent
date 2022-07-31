import React from 'react';

import './Input.scss'

interface IInput {
    className?: string;
    placeholder?: string;
    type: string;
    id?:string;
}

const Input: React.FC<IInput> = ({className, placeholder, type, id}) => {
    return (
        <input 
            className={`Input ${className}`} 
            placeholder={placeholder} 
            type={type}
            id={id}
        />
    );
};

export default Input;