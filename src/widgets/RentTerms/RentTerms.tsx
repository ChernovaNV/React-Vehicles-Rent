import React from 'react';

import './RentTerms.scss'

import { useAppSelector } from 'shared/hooks/useAppDispatch';



export const RentTerms: React.FC = () => {
    const { vehicle } = useAppSelector(state => state.vehicle)

    return (
        <div className='RentTerms'>
            <p className="ProductPage__text">
                {vehicle.term_text}
            </p>
            <h3 className="ProductPage__subtitle">
                Дополнительные условия:
            </h3>
            <ul className="RentTerms">
                <li className="RentTerms__item ProductPage__text">
                    Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться. Упражнения и отдых - наше развлечение.
                </li>
                <li className="RentTerms__item ProductPage__text">
                    Набережная не выходит за пределы школьного округа, так что есть чем заняться.
                </li>
                <li className="RentTerms__item ProductPage__text">
                    Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться.
                </li>
            </ul>
            
        </div>
    );
};