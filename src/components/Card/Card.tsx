import React from 'react';
import { useNavigate } from 'react-router';

import './Card.scss'
import { Flex } from 'components/UI';
import { IVehicles } from 'models/models';


interface cardProps {
    item: IVehicles;
}


const Card: React.FC<cardProps> = ({item}) => {
    const navigate = useNavigate();

    const clickHandler = () => navigate(`details/${item.id}`)

    return (
        <Flex className="Card" onClick={clickHandler}> 
            <img className="Card__img" src={item.preview} alt="фото товара" />
            <Flex className="Card__content" >
                <div className="Card__title">{item.name}</div>
                <p className="Card__text">
                    {item.description}
                </p>
                <div className="Card__price">{item.rent} руб/ч</div>
            </Flex>
        </Flex>
    );
};

 
export default Card;