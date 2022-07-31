import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

import { Button, Flex } from 'components/UI';

import User from 'assets/images/user.jpg'
import SvgIcons from 'components/SvgIcons/SvgIcons';
import { viewVar } from 'components/UI/Button/Button';

const Header: React.FC = () => {
    return (
        <header className='Header'>
            <Flex>
                <Flex className="Header__left"> 
                    <Link to='/' className="Header__logo">
                        <SvgIcons id='logo'/>
                    </Link>
                    <span>Первый в мире доступный эйршеринг</span>
                </Flex>
  
                <Flex className="Header__right">
                    <Button 
                        className="Header__themeChange" 
                        view={viewVar.text}
                        onClick={() => console.log('ok')}
                    >
                        <SvgIcons id='themeDark' className="icon--themeDark"/>
                        <span>Ночная тема</span>
                    </Button>
                    <Flex className="Header__icons">
                        <SvgIcons id='messages' className="icon--header"/>
                        <SvgIcons id='bell' className="icon--header"/>
                    </Flex>
                    <Flex className="user">
                        <span className="user__name">Иван Иванов</span>
                        <img src={User} alt="Пользователь" className="user__img" />
                    </Flex>
                </Flex>
            </Flex>
        </header>
    );
};

export default Header;