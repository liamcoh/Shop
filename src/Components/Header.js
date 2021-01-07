import React from 'react';
import headerStyles from './Header.module.css';
import logo from '../Assets/logo.svg';

function Header() {


  return (
    <div className={headerStyles.flexBox}>
      <p>רשימת הקניות שלי ({"2"})</p>
      <img src={logo} alt='logo'></img>
    </div>
  );
}

export default Header;