import React, { useState } from 'react';

import './MainPage.scss'

import { Button, Icon, Modal } from 'shared/UI';
import { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';
import { CardsList } from 'widgets/index';
import { NewProduct } from 'entities/index';

import Plus from 'shared/assets/images/svg/plus.svg'

const HomePage: React.FC = () => {
    const [modalActive, setModalActive] = useState(false)


    return (
        <main className="container--main container--withBg mainPage" onClick={() => setModalActive(true)}>
            <div className="mainPage__header">
                <h2 className="mainPage__title">
                    Арендуйте <span>что угодно</span>
                </h2>
                <div className="mainPage__right"> 
                    Добавить
                    <Button 
                        className='mainPage__button' 
                        theme={ButtonTheme.accent}
                        size={ButtonSize.small}
                        onClick={() => setModalActive(true)}
                    >
                        <Icon Svg={Plus}/>
                    </Button>
                </div>
            </div>

            <CardsList/>

        <Modal active={modalActive} >
            <NewProduct setActive={setModalActive}/> 
        </Modal>

        </main>
    );
};

export default HomePage;