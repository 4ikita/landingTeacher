import React, { useState } from 'react';
import classes from './MyNavbar.module.css';
import MyButton from '../button/MyButton';
import logo from '../../../logo.svg';

function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.myNavbar}>
      {/* Logo acts as menu button on mobile */}
      <div
        className={classes.logoContainer}
        onClick={toggleMenu}
      >
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>

      {/* Navigation links */}
      <div
        className={`${classes.navigationLinks} ${
          menuOpen ? classes.menuOpen : ''
        }`}
      >
        <a href="#about">Обо мне</a>
        <a href="#features">Обучение</a>
        <a href="#reviews">Отзывы</a>
        <a href="#pricing">Тарифы</a>
      </div>

      {/* Action Button */}
      <div className={classes.buttonContainer}>
        <MyButton scrollToId='subscription'>Записаться на занятия</MyButton>
      </div>
    </div>
  );
}

export default MyNavbar;