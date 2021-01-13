import React from 'react';
import CommercialStyles from './Commercial.module.css';
import MilkyImg from '../Assets/Milky.png';
import * as utils from './utils.js';


function Commercial({ list, sum }) {

    function addMilky() {
        if(window.confirm('האם ברצונך להוסיף מיליקי שוקולד?')) {
          utils.addToList('מוצרי חלב', 'מילקי שוקולד', 1, 7, list, sum);
        }
    }


  return (
    <div className={CommercialStyles.rightCommercial} onClick={addMilky}>
        <h1>מילקי שוקולד!</h1>
        <p>יאמ</p>
        <img className={CommercialStyles.img} src={MilkyImg} alt='Milky'></img>
    </div>
  );
}

export default Commercial;