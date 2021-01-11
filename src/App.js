import React, { useState } from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import appStyles from './App.module.css';

function App() {

  var rows = [
    { category: 'פירות', name:'אבוקדו', number:3, price:5 },
    { category: 'מוצרי חלב', name:'מילקי', number:6, price:4}
  ];

  const [list, setList] = useState(rows)
  const [category1, setCategory1] = useState('הזן קטגוריה')
  const [name1, setName1] = useState('הזן שם מוצר')
  const [category2, setCategory2] = useState('מוצרי חלב')
  const [name2, setName2] = useState('מילקי')
  const [number1, setNumber1] = useState('הזן כמות')
  const [price1, setPrice1] = useState('הזן מחיר ליחידה')
  const [number2, setNumber2] = useState('הזן כמות')
  const [price2, setPrice2] = useState('הזן מחיר ליחידה')

  function setRows(category, name, number, price) {
    var tmp = [...list]
    tmp.push({
      category: category,
      name: name,
      number: number,
      price: price
    })
    setList(tmp)
  }

  return (
    <div className={appStyles.main}>
      <Header rows={list} />
      <hr className={appStyles.hr}></hr>
      <Body 
      setRows={setRows}
      category1={[category1, setCategory1]} 
      name1={[name1, setName1]}
      category2={[category2, setCategory2]} 
      name2={[name2, setName2]} 
      number1={[number1, setNumber1]} 
      price1={[price1, setPrice1]}
      number2={[number2, setNumber2]} 
      price2={[price2, setPrice2]} />
    </div>
  );
}

export default App;
