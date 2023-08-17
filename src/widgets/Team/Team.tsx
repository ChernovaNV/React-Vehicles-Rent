import React from 'react';

import './Team.scss'

import { useAppSelector } from 'shared/hooks/useAppDispatch';

import Team1 from 'shared/assets/images/team_1.jpg'
import Team2 from 'shared/assets/images/team_2.jpg'
import Team3 from 'shared/assets/images/team_3.jpg'


export const Team: React.FC = () => {
    const { vehicle } = useAppSelector(state => state.vehicle)

    return (
        <div className='Team' >
            <p> {vehicle.team_text} </p>
            <h3 className="ProductPage__subtitle">
                Квалифицированные специалисты
            </h3>

            <div className='Team__items'>
                <div className="Team__item">
                    <div className="Team__img">
                        <img src={Team1} alt="Член команды" />
                    </div>
                    <div>
                        <p className="Team__name">Марвин МакКинни</p>
                        <p className="Team__position">
                            Пилот
                        </p>
                    </div>
                </div>
                <div className="Team__item">
                    <div className="Team__img">
                        <img src={Team2} alt="Член команды" />
                    </div>
                    <div>
                        <p className="Team__name">Саванна Нгуен</p>
                        <p className="Team__position">
                            Механик
                        </p>
                    </div>
                </div>
                <div className="Team__item">
                    <div className="Team__img">
                        <img src={Team3} alt="Член команды" />
                    </div>
                    <div>
                        <p className="Team__name">Кортни Генри</p>
                        <p className="Team__position">
                            Стюардесса
                        </p>     
                    </div>
                </div>
            </div>

            <p>
                Набережная не выходит за пределы школьного округа, так что есть чем заняться. Ему нравятся услуги последствий, он хочет смягчиться. Упражнения и отдых - наше развлечение.
            </p>
        </div>
    );
};
