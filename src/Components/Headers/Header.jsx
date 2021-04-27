// import React from 'react';
import s from './Header.module.css';
import logoHeaders from '../PNG/header-icon.png';
import iconSearchs from '../PNG/icon-search.png';
import {NavLink} from "react-router-dom";

function Header() {
  return (
        <header>
            <div className={s.logo}>
                <img className={s.logoHeader} src={logoHeaders} alt="logo"/>
            </div>
            <nav className={s.nav}>
                <NavLink to='/Home' className={s.navItem}>
                    Главная
                </NavLink>
                <NavLink to='/Dialogs' className={s.navItem}>
                    Диалоги
                </NavLink>
                <a className={s.navItem}>
                    Друзья
                </a>
                <a className={s.navItem}>
                    Новости
                </a>
                <a className={s.navItem}>
                    Настройки
                </a>
            </nav>
            <div className={s.Search}>
                <input className={s.input} type="text"/>
                <div className={s.iconSearch}>
                    <img src={iconSearchs} alt="123"/>
                </div>
                <div className={s.theme}>
                    <p>Черный</p>
                </div>
            </div>
        </header>
  );
}

export default Header;
