import React, { useState } from 'react';
import FormWriteStyles from './FormWrite.module.css';
import * as utils from './utils.js';

function FormWrite({ list, sum }) {

    const [categoryWrite, setCategoryWrite] = useState('')
    const [nameWrite, setNameWrite] = useState('')
    const [numberWrite, setNumberWrite] = useState('')
    const [priceWrite, setPriceWrite] = useState('')

    return (
        <div className={FormWriteStyles.formDiv}>
            <form>
                <label>
                שם קטגוריה:
                </label>
                <input type="text" name="category" placeholder={'הזן קטגוריה'} onChange={(e) => setCategoryWrite(e.target.value)} />
            </form>
            <form>
                <label>
                שם מוצר:
                </label>
                <input type="text" name="name" placeholder={'הזן שם מוצר'} onChange={(e) => setNameWrite(e.target.value)} />
            </form>
            <form>
                <label>
                כמות:
                </label>
                <input type="text" name="number" placeholder={'הזן כמות'} onChange={(e) => setNumberWrite(e.target.value)} />
            </form>
            <form>
                <label>
                    מחיר ליחידה:
                </label>
                <input type="text" name="price" placeholder={'הזן מחיר ליחידה'} onChange={(e) => setPriceWrite(e.target.value)} />
            </form>
            <div style={{ textAlign: 'center' }}>
                <button 
                type='button' 
                onClick={() => utils.addToList(categoryWrite, nameWrite, numberWrite, priceWrite, list, sum)}>
                    הוסף מוצר!
                </button>
                </div>
        </div>
    );
}

export default FormWrite;