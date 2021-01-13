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
  

  // Get DB from back Server
  useEffect(() => {

    const requestOptions = {
      method: 'GET'
    };

    setTimeout(() => {
      fetch(host_name + 'getInitalList', requestOptions)
      .then(response => response.json())
      .then(data => {
        setList(data.message)
        data.message.forEach((row) => {
          setSum(s => s + row.totalPrice)
        })
      })
    }, 1000 * 100)
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
