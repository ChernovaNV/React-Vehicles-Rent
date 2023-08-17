import React, { SetStateAction } from 'react';

import  './Modal.scss';


interface ModalProps {
    children: React.ReactNode;
    active?: boolean;
    // setActive: React.Dispatch<SetStateAction<boolean>>; 
}

export const Modal: React.FC<ModalProps> = ({
    children, 
    active = false,
    ...otherProps
}: ModalProps) => {

    const classNames = [
        'Modal', 
        active ? 'active' : '',
    ].join(" ");

    return (
        <div 
            className={classNames}
            {...otherProps}
        >
            <div 
                className='Modal__container' 
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

 