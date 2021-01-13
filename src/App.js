import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import Commercial from './Components/Commercial'
import appStyles from './App.module.css';
const { host_name } = require("./config");


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


  /*function addToList(category, name, number, price) {

    if (list.length === Number(max_items)) {
      alert("מקסימום מוצרים")
      return;
    }

    // check if category and name contain only letters a to z, A to Z, and א עד ת. allow spaces between words, no empty words.
    if (!/^[a-z][a-z\s]*$/.test(category) && !/^[א-ת][א-ת\s]*$/.test(category)) { 
      alert("קטגוריה שגויה")
      return;
    }

    if (!/^[a-z][a-z\s]*$/.test(name) && !/^[א-ת][א-ת\s]*$/.test(name)) {
      alert("שם שגוי")
      return;
    }

    // check if number and price contain only digits, no empty words.
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
    
    fetch(host_name + 'addItem', requestOptions)
      .then(response => {

        var tmp;

        if (response.status === 201) {
          tmp = [...list]
          let pervTotalPrice

          tmp.forEach(ele => {
            if(ele.category === category && ele.name === name) {
              pervTotalPrice = parseInt(ele.number) * parseInt(ele.price)
              ele.number = parseInt(number)
              ele.price = parseInt(price)
              ele.totalPrice = parseInt(ele.totalPrice) - pervTotalPrice + parseInt(price * number)
            }
          })

          setSum(s => s - pervTotalPrice + (price * number))
          setList(tmp)
        }
        else {
          tmp = [...list]

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
  }*/

  // Get DB from back Server
  useEffect(() => {

    const requestOptions = {
      method: 'GET'
    };

    /*setTimeout(() => {
      fetch(host_name + 'getInitalList', requestOptions)
      .then(response => response.json())
      .then(data => {
        setList(data.message)
        data.message.forEach((row) => {
          setSum(s => s + row.totalPrice)
        })
      })
    }, 1000 * 10)*/

    fetch(host_name + 'getInitalList', requestOptions)
    .then(response => response.json())
    .then(data => {
      setList(data.message)
      data.message.forEach((row) => {
        setSum(s => s + row.totalPrice)
      })
    })
  }, [])


  return (
    <div className={appStyles.main}>
      <Header list={list} sum={sum} />

      <hr className={appStyles.hr}></hr>

      <Body 
      categoryWrite={[categoryWrite, setCategoryWrite]} 
      nameWrite={[nameWrite, setNameWrite]}
      categorySelect={[categorySelect, setCategorySelect]} 
      nameSelect={[nameSelect, setNameSelect]} 
      numberWrite={[numberWrite, setNumberWrite]} 
      priceWrite={[priceWrite, setPriceWrite]}
      numberSelect={[numberSelect, setNumberSelect]} 
      priceSelect={[priceSelect, setPriceSelect]}
      list={[list, setList]}
      sum={[sum, setSum]} />

      <Commercial 
      list={[list, setList]}
      sum={[sum, setSum]} />
    </div>
  );
}

export default App;
