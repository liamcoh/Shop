import React, { useState } from 'react';
import FormSelectStyles from './FormSelect.module.css';
import * as utils from './utils.js';

function FormSelect({ list, sum }) {

    // States
    const [categorySelect, setCategorySelect] = useState('מוצרי חלב')
    const [nameSelect, setNameSelect] = useState('מילקי')
    const [numberSelect, setNumberSelect] = useState('')
    const [priceSelect, setPriceSelect] = useState('')

    // Deafualt select values
    const featuredCategories = ['מוצרי חלב', 'פירות', 'ירקות', 'חטיפים', 'ניקיון', 'אסטתיקה', 'שתייה', 'אלכוהול']
    const featuredItems = 
    [{cat: 'מוצרי חלב', name: 'מילקי' }, {cat: 'פירות', name: 'אבוקדו' },
    {cat: 'ירקות', name: 'מלפפון' }, {cat: 'חטיפים', name: 'במבה' },
    {cat: 'ניקיון', name: 'מגבונים' }, {cat: 'אסטתיקה', name: 'אודם' },
    {cat: 'שתייה', name: 'קולה' }, {cat: 'אלכוהול', name: 'יין' }]

    return (
        <div className={FormSelectStyles.formDiv}>
            <form>
                <label>
                שם קטגוריה:
                </label>
                <select name='categories' id='categories' onChange={(e) => setCategorySelect(e.target.value)}>
                    {featuredCategories.map(cat => {
                        return <option key={cat} value={cat}>{cat}</option>
                    })}
                </select>
            </form>
            <form>
                <label>
                שם מוצר:
                </label>
                <select name='items' id='items' onChange={(e) => setNameSelect(e.target.value)}>
                    {featuredItems.filter(item => {
                        return item.cat === categorySelect
                    }).map(item => {
                        return <option key={item.name} value={item.name}>{item.name}</option>
                    })}
                </select>
            </form>
            <form>
                <label>
                כמות:
                </label>
                <input type="text" name="number" placeholder={'הזן כמות'} onChange={(e) => setNumberSelect(e.target.value)} />
            </form>
            <form>
                <label>
                    מחיר ליחידה:
                </label>
                <input type="text" name="price" placeholder={'הזן מחיר ליחידה'} onChange={(e) => setPriceSelect(e.target.value)} />
            </form>
            <div style={{ textAlign: 'center' }}>
                <button 
                type='button' 
                onClick={() => utils.addToList(categorySelect, nameSelect, numberSelect, priceSelect, list, sum)}>
                    הוסף מוצר!
                </button>
                </div>
        </div>
    );
}

export default FormSelect;