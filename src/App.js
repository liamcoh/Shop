import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import Commercial from './Components/Commercial'
import appStyles from './App.module.css';
import logo from './Assets/logo.svg';
const { host_name } = require("./config");


function App() {

  // States
  const [list, setList] = useState([])
  const [sum, setSum] = useState(0)
  const [loading, setLoading] = useState(true)

  // Get DB from back Server
  useEffect(() => {

    const requestOptions = {
      method: 'GET'
    };

    fetch(host_name + 'getInitalList', requestOptions)
    .then(response => response.json())
    .then(data => {
      setList(data.message)
      data.message.forEach((row) => {
        setSum(s => s + row.totalPrice)
      })
      setTimeout(() => { setLoading(false) }, 1000 * 5)
    })
  }, [])


  if(loading) return (
    <div className={appStyles.loading}>
      <img src={logo} alt='loading'></img>
      <h1>Loading...</h1>
    </div>
  )

  return (
    <div className={appStyles.main}>
      <Header list={list} sum={sum} />

      <hr className={appStyles.hr}></hr>

      <Body 
      list={[list, setList]}
      sum={[sum, setSum]} />

      <Commercial 
      list={[list, setList]}
      sum={[sum, setSum]} />
    </div>
  );
}

export default App;
