import React from 'react';
import BodyStyles from './Body.module.css';
import FormWrite from './FormWrite.js';
import FormSelect from './FormSelect.js';
import plusIcon from '../Assets/plusIcon.svg';

function Body({ addToList, categoryWrite, nameWrite, categorySelect , nameSelect , numberWrite, priceWrite, numberSelect, priceSelect }) {


  return (
    <div className={BodyStyles.flexBox}>

      {/*Title*/}
      <img className={BodyStyles.iconImg} src={plusIcon} alt='plusIcon'></img>
      <p className={BodyStyles.sumP}>הוסף מוצר חדש:</p>
      
      <div className={BodyStyles.lineBreak}></div>

      {/*Body*/}
      <FormWrite addToList={addToList} category={categoryWrite} name={nameWrite} number={numberWrite} price={priceWrite}  />
      <FormSelect addToList={addToList} category={categorySelect} name={nameSelect} number={numberSelect} price={priceSelect} />
      
    </div>
  );
}

export default Body;