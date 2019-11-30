import React from 'react';
import logo from '../../assets/images/festarialogo.png';
import '../../assets/styles/components/header/logo.css';

function Logo(){
    return(
        <img src={logo} className="logo" alt="logo" />
    )
}
export default Logo;
