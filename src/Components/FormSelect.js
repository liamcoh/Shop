import React from 'react';
import FormSelectStyles from './FormSelect.module.css';
import * as utils from './utils.js';

function FormSelect({ category, name, number, price, list, sum }) {

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
                <select name='categories' id='categories' onChange={(e) => category[1](e.target.value)}>
                    {featuredCategories.map(cat => {
                        return <option key={cat} value={cat}>{cat}</option>
                    })}
                </select>
            </form>
            <form>
                <label>
                שם מוצר:
                </label>
                <select name='items' id='items' onChange={(e) => name[1](e.target.value)}>
                    {featuredItems.filter(item => {
                        return item.cat === category[0]
                    }).map(item => {
                        return <option key={item.name} value={item.name}>{item.name}</option>
                    })}
                </select>
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

export default FormSelect;