import React from 'react';

import './Modal.scss';

interface IModal {
    children: React.ReactNode;
    active: boolean;
    setActive: Function;
}

const Modal: React.FC<IModal> = ({children, active, setActive}) => {
    return (
        <div 
            className={active ? 'Modal active' : 'Modal'}
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

export default Modal;