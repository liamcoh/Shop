import React from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import appStyles from './App.module.css';

function App() {

  var rows = [
    { category: 'פירות', name:'אבוקדו', number:3, price:5 },
    { category: 'מוצרי חלב', name:'מילקי', number:6, price:4}
  ];

  return (
    <div className={appStyles.main}>
      <Header rows={rows} />
      <hr className={appStyles.hr}></hr>
      <Body />
    </div>
  );
}

export default App;
