import React from 'react'
import classes from './MyFooter.module.css'
import calculator from '../assets/1440+/calculator.png'


const MyFooter = () => {
  return (
    <footer className={classes.myFtr}>
       <div className="footer_layout">
        <div className="contacts">
          <img src={calculator} alt="логотип" />
          <div className="telephone_info">
            <span>+7 (932)-324-85-09</span>
            <p>По всем вопросам</p>
          </div>
          <div className="email_info">
            <span>math4air@gmail.com</span>
            <p>Электронная почта</p>
          </div>
        </div>
        <div className="socials">
           
          </div>
       </div>
       <div className="copyrights">
        <div className="ownerName">nikitaurevich 2025</div>
        <div className="policies">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Правила и условия</a>
          <a href="#">Cookies</a>
        </div>
       </div>

    </footer>
  )
}

export default MyFooter