import React from 'react';
import FormWriteStyles from './FormWrite.module.css';
import * as utils from './utils.js';

function FormWrite({ category, name, number, price, list, sum }) {
    

  return (
    <div className={FormWriteStyles.formDiv}>
        <form>
            <label>
            שם קטגוריה:
            </label>
            <input type="text" name="category" value={category[0]} onChange={(e) => category[1](e.target.value)} />
        </form>
        <form>
            <label>
            שם מוצר:
            </label>
            <input type="text" name="name" value={name[0]} onChange={(e) => name[1](e.target.value)} />
        </form>
        <form>
            <label>
            כמות:
            </label>
            <input type="text" name="number" value={number[0]} onChange={(e) => number[1](e.target.value)} />
        </form>
        <form>
            <label>
                מחיר ליחידה:
            </label>
            <input type="text" name="price" value={price[0]} onChange={(e) => price[1](e.target.value)} />
        </form>
        <div style={{ textAlign: 'center' }}>
            <button 
            type='button' 
            onClick={() => utils.addToList(category[0], name[0], number[0], price[0], list, sum)}>
                הוסף מוצר!
            </button>
            </div>
    </div>
  );
}

export default FormWrite;