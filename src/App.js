import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import appStyles from './App.module.css';

function App() {

  // Initial DB values
  var DB = [
    { category: 'פירות', name:'אבוקדו', number:3, price:5 },
    { category: 'מוצרי חלב', name:'מילקי', number:6, price:4}
  ];

  // States
  const [list, setList] = useState(DB)
  const [sum, setSum] = useState(0)
  const [categoryWrite, setCategoryWrite] = useState('הזן קטגוריה')
  const [nameWrite, setNameWrite] = useState('הזן שם מוצר')
  const [numberWrite, setNumberWrite] = useState('הזן כמות')
  const [priceWrite, setPriceWrite] = useState('הזן מחיר ליחידה')
  const [categorySelect, setCategorySelect] = useState('מוצרי חלב')
  const [nameSelect, setNameSelect] = useState('מילקי')
  const [numberSelect, setNumberSelect] = useState('הזן כמות')
  const [priceSelect, setPriceSelect] = useState('הזן מחיר ליחידה')


  function addToList(category, name, number, price) {

    // check if category and name contain only letters
    if (!/^[a-z][a-z\s]*$/.test(category) && !/^[א-ת][א-ת\s]*$/.test(category)) { 
      alert("קטגוריה שגויה")
      return;
    }

    if (!/^[a-z][a-z\s]*$/.test(name) && !/^[א-ת][א-ת\s]*$/.test(name)) {
      alert("שם שגוי")
      return;
    }

    // check if number and price contain only digits
    if (!/^\d+$/.test(number)) {
      alert("מספר שגוי")
      return;
    }

    if (!/^\d+$/.test(price)) {
      alert("מספר שגוי")
      return;
    }

    var tmp = [...list]

    tmp.push({
      category: category,
      name: name,
      number: number,
      price: price,
      totalPrice: price * number
    })

    setSum(s => s + price * number)
    setList(tmp)
  }

  // Calculate total price column for each item.
  useEffect(() => { 
    list.forEach((row) => {
      row.totalPrice = row.price * row.number
      setSum(s => s + row.totalPrice)
    })  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className={appStyles.main}>
      <Header list={list} sum={sum} />

      <hr className={appStyles.hr}></hr>

      <Body 
      addToList={addToList}
      categoryWrite={[categoryWrite, setCategoryWrite]} 
      nameWrite={[nameWrite, setNameWrite]}
      categorySelect={[categorySelect, setCategorySelect]} 
      nameSelect={[nameSelect, setNameSelect]} 
      numberWrite={[numberWrite, setNumberWrite]} 
      priceWrite={[priceWrite, setPriceWrite]}
      numberSelect={[numberSelect, setNumberSelect]} 
      priceSelect={[priceSelect, setPriceSelect]} />
    </div>
  );
}

export default App;
