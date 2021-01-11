import React from 'react';
import FormWriteStyles from './FormWrite.module.css';

function FormWrite({ side, setRows, category, name, number, price }) {
console.log(category)

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
            onClick={() => setRows(category[0], name[0], number[0], price[0])}>
                הוסף מוצר!
            </button>
            </div>
    </div>
  );
}

export default FormWrite;