import React from 'react';
import BodyStyles from './Body.module.css';
import FormWrite from './FormWrite.js';
import FormSelect from './FormSelect.js';
import plusIcon from '../Assets/plusIcon.svg';

function Body({ setRows, category1, name1, category2 , name2 , number1, price1, number2, price2 }) {


  return (
    <div className={BodyStyles.flexBox}>

      {/*Title*/}
      <img className={BodyStyles.iconImg} src={plusIcon} alt='plusIcon'></img>
      <p className={BodyStyles.sumP}>הוסף מוצר חדש:</p>
      <div className={BodyStyles.lineBreak}></div>

      {/*Body*/}
      <FormWrite setRows={setRows} category={category1} name={name1} number={number1} price={price1}  />
      <FormSelect setRows={setRows} category={category2} name={name2} number={number2} price={price2} />
      
    </div>
  );
}

export default Body;