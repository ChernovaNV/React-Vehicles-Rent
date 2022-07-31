import React, { useState } from 'react';

import './HomePage.scss'

import { SvgIcons } from 'components/'; 
import { Button, Flex, Modal } from 'components/UI';
import { viewVar } from 'components/UI/Button/Button';
import NewProduct from 'components/NewProduct/NewProduct';

import CardsList from 'components/CardsList/CardsList';

const HomePage: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)


    return (
        <main className="container--main container--withBg HomePage" onClick={() => setModalActive(true)}>
            <Flex className="HomePage__header">
                <div className="HomePage__left">
                    Арендуйте <span>что угодно</span>
                </div>
                <div className="HomePage__right"> 
                    Добавить
                    <Button className='HomePage__button' view={viewVar.smallMain} onClick={() => setModalActive(true)}>
                        <SvgIcons id='plus'/>
                    </Button>
                </div>
            </Flex>

            <CardsList/>

        <Modal active={modalActive} setActive={setModalActive}>
            <NewProduct setActive={setModalActive}/>
        </Modal>

        </main>
    );
};

export default HomePage;