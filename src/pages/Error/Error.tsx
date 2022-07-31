import React from 'react';

import './Error.scss'
import { Button, Flex } from 'components/UI';
import { viewVar } from 'components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';


const Error: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Flex 
            className='container--main container--withBg Error' 
        >
            <h2 className="Error__title">Произошла ошибка</h2>
            <p className="Error__text">Пожалуйста, перезагрузите страницу</p>
            <Button 
                view={viewVar.baseMain} 
                onClick={() =>{ 
                    console.log('click');
                    
                    navigate(-1)
                }}
            >
                Перезагрузить страницу
            </Button>
        </Flex>
    );
};

export default Error;