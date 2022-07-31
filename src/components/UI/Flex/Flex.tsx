import React from 'react';

import './Flex.scss'


interface IFlex {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler;
}

const Flex: React.FC<IFlex> = ({children, className = '', onClick}) => {
    
    return (
        <div 
            className={`Flex ${className}`}
            onClick={onClick}
        >
            
            {children}
        </div>
    );
};

export default Flex;