import React from 'react';
import BodyStyles from './Body.module.css';
import FormWrite from './FormWrite.js';
import FormSelect from './FormSelect.js';
import plusIcon from '../Assets/plusIcon.svg';

function Body({ categoryWrite, nameWrite, categorySelect , nameSelect , numberWrite, priceWrite, numberSelect, priceSelect, list, sum }) {


  return (
    <div className={BodyStyles.flexBox}>

      {/*Title*/}
      <img className={BodyStyles.iconImg} src={plusIcon} alt='plusIcon'></img>
      <p className={BodyStyles.sumP}>הוסף מוצר חדש:</p>
      
      <div className={BodyStyles.lineBreak}></div>

      {/*Body*/}
      <FormWrite 
      category={categoryWrite} 
      name={nameWrite} 
      number={numberWrite} 
      price={priceWrite}
      list={list}
      sum={sum}  />
      <FormSelect 
      category={categorySelect} 
      name={nameSelect} 
      number={numberSelect} 
      price={priceSelect}
      list={list}
      sum={sum} />
      
    </div>
  );
}

export default Body;