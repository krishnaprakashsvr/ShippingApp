import React from 'react';
import './Header.css';

export const Header = (props) =>{
    return( <div className={props.customStyle}> {props.name}</div>);
  }