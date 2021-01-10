import React from 'react';
import BodyStyles from './Body.module.css';
import plusIcon from '../Assets/plusIcon.svg';

function Body() {


  return (
    <div className={BodyStyles.flexBox}>

      {/*Title*/}
      <img className={BodyStyles.iconImg} src={plusIcon} alt='plusIcon'></img>
      <p className={BodyStyles.sumP}>הוסף מוצר חדש:</p>

      {/*Body*/}
      
    </div>
  );
}

export default Body;