import React from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import appStyles from './App.module.css';

function App() {


  return (
    <div className={appStyles.main}>
      <Header />
      <hr className={appStyles.hr}></hr>
      <Body />
    </div>
  );
}

export default App;
