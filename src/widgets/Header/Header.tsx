import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'


import { Button, Icon } from 'shared/UI';
import { ButtonSize, ButtonTheme } from 'shared/UI/Button/Button';

import User from 'shared/assets/images/user.jpg'
import Logo from 'shared/assets/images/svg/logo.svg'
import ThemeDark from 'shared/assets/images/svg/theme-night.svg'
import Messages from 'shared/assets/images/svg/message.svg'
import Bell from 'shared/assets/images/svg/bell.svg'

export const Header: React.FC = () => {
    return (
        <header className='Header'>
            <div className='Header__inner'>
                    <Link to='/' className="Header__logo">
                        <Icon Svg={Logo}/>
                    </Link>
                    
                    <p className='Header__slogan'>Первый в мире доступный эйршеринг</p>

                    <div className="Header__icons">
                    <Button 
                        className="Header__themeChange" 
                        theme={ButtonTheme.text}
                        size={ButtonSize.small}
                        onClick={() => console.log('ok')}
                    >
                        <Icon Svg={ThemeDark} className="icon--themeDark"/>
                    </Button>
                    <Button 
                        className="Header__themeChange" 
                        theme={ButtonTheme.text}
                        size={ButtonSize.small}
                        onClick={() => console.log('ok')}
                    >
                        <Icon Svg={Messages} className="icon--header"/>
                    </Button>
                    <Button 
                        className="Header__themeChange" 
                        theme={ButtonTheme.text}
                        size={ButtonSize.small}
                        onClick={() => console.log('ok')}
                    >
                        <Icon Svg={Bell} className="icon--header"/>
                    </Button>
                    </div>
                    <div className="user">
                        <span className="user__name">Иван Иванов</span>
                        <img src={User} alt="Пользователь" className="user__img" />
                    </div>

            </div>
        </header>
    );
};