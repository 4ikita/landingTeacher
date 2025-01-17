import React from 'react';
import classes from './MyMain.module.css';
const MyMain = ({children, ...props}) => {
  return (
    <div className={classes.myMain}>{children}</div>
  )
}

export default MyMain