import React from 'react';

import './Features.scss'


import { Icon } from 'shared/UI';
import { useAppSelector } from 'shared/hooks/useAppDispatch';
import Man from 'shared/assets/images/svg/man.svg';
import Goblet from 'shared/assets/images/svg/goblet.svg';



export const Features: React.FC = () => {
    const { vehicle } = useAppSelector(state => state.vehicle)

    return (
        <div className='Features'>
            <p> {vehicle.specifications_text} </p>
            <h3 className="ProductPage__subtitle">
                Дополнительные условия:
            </h3>

                <div className="Features__item">
                    <div className="Features__img">
                        <Icon Svg={Goblet} />
                    </div>

                    <div className="Features__content">
                        <p className="Features__title">
                            Задача для настоящего чемпиона
                        </p>
                        <p>
                            Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться.
                        </p>

                    </div>
                </div>
                <div className="Features__item">
                    <div className="Features__img">
                        <Icon Svg={Man} />
                    </div>

                    <div className="Features__content">
                        <p className="Features__title">
                            Вспотевшие руки пилота
                        </p>
                        <p>
                            Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться.
                        </p>

                    </div>
                </div> 
            </div>       
    );
};