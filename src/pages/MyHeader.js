import React from 'react'
import MyNavbar from '../components/UI/navbar/MyNavbar';
import classes from './MyHeader.module.css';
const MyHeader = () => {
  return (
    <header className={classes.myHdr}>
        <MyNavbar></MyNavbar>
    </header>
  )
}

export default MyHeader