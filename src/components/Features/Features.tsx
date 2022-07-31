import React from 'react';

import './Features.scss'

import { Flex } from 'components/UI';

import SvgIcons from 'components/SvgIcons/SvgIcons';
import { useAppSelector } from 'hooks/redux';


interface IFeatures {

}

const Features: React.FC<IFeatures> = () => {
    const { vehicle } = useAppSelector(state => state.vehicle)

    return (
        <div className='Features'>
            <p> {vehicle.specifications_text} </p>
            <h3 className="ProductPage__subtitle">
                Дополнительные условия:
            </h3>

                <Flex className="Features__item">
                    <Flex className="Features__img">
                        <SvgIcons id="goblet" />
                    </Flex>

                    <div className="Features__content">
                        <p className="Features__title">
                            Задача для настоящего чемпиона
                        </p>
                        <p>
                            Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться.
                        </p>

                    </div>
                </Flex>
                <Flex className="Features__item">
                    <Flex className="Features__img">
                        <SvgIcons id="man" />
                    </Flex>

                    <div className="Features__content">
                        <p className="Features__title">
                            Вспотевшие руки пилота
                        </p>
                        <p>
                            Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться.
                        </p>

                    </div>
                </Flex> 
            </div>       
    );
};

export default Features;