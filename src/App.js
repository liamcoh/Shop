import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import appStyles from './App.module.css';
import MilkyImg from './Assets/Milky.png';
const { max_items } = require("./config");


function App() {

  // States
  const [list, setList] = useState([])
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

    if (list.length === Number(max_items)) {
      alert("מקסימום מוצרים")
      return;
    }

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

    // Check with server if item exists.
    var data = {
      category: category,
      name: name,
      number: number,
      price: price,
      totalPrice: number * price
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    fetch('http://localhost:3001/addItem', requestOptions)
      .then(response => {
        if (response.status === 400) {
          alert("קיים במערכת")
          return;
        }
        else {
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
      })
  }

  // Get DB from back Server
  useEffect(() => {

    const requestOptions = {
      method: 'GET'
    };

    fetch('http://localhost:3001/getInitalList', requestOptions)
      .then(response => response.json())
      .then(data => {
        setList(data.message)
        data.message.forEach((row) => {
          setSum(s => s + row.totalPrice)
        })
      })
  }, [])

  function addMilky() {
    if(window.confirm('האם ברצונך להוסיף מיליקי שוקולד?')) {
      addToList('מוצרי חלב', 'מילקי שוקולד', 1, 7);
    }
  }


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

      <div className={appStyles.rightCommercial} onClick={addMilky}>
        <h1>מילקי שוקולד!</h1>
        <p>יאמ</p>
        <img className={appStyles.img} src={MilkyImg} alt='Milky'></img>
      </div>
    </div>
  );
}

export default App;
