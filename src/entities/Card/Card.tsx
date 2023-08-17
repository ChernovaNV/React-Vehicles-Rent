import React from 'react';
import { useNavigate } from 'react-router';

import './Card.scss'
import { Vehicles } from 'app/types/models';



interface CardProps {
    item: Vehicles;
}


export const Card: React.FC<CardProps> = ({item}) => {
    const navigate = useNavigate();

    const clickHandler = () => navigate(`details/${item.id}`)

    return (
        <div className="Card" onClick={clickHandler}> 
            <img className="Card__img" src={item.preview} alt="фото товара" />
            <div className="Card__content" >
                <div className="Card__title">{item.name}</div>
                <p className="Card__text">
                    {item.description}
                </p>
                <div className="Card__price">{item.rent} руб/ч</div>
            </div>
        </div>
    );
};

