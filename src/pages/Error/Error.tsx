import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Error.scss'

import { Button } from 'shared/UI';
import { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';


const Error: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div 
            className='container--main container--withBg Error' 
        >
            <h2 className="Error__title">Произошла ошибка</h2>
            <p className="Error__text">Пожалуйста, перезагрузите страницу</p>
            <Button 
                theme={ButtonTheme.accent}
                size={ButtonSize.base}
                onClick={() =>{ 
                    if(navigate(-1) === undefined) {
                        navigate('/')
                    }
                    console.log(navigate(-1));
                    
                    navigate(-1)
                }}
            >
                Перезагрузить страницу
            </Button>
        </div>
    );
};

export default Error;