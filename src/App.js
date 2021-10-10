import './App.css';
import React, { useState } from 'react'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {

  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [count, setcount] = useState(0)
  const [activeP, setActiveP] = useState(1);
  let [ansArray, setAnsArray] = useState(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]);

  const switchPage2 = () => {
    document.getElementById('comp2').classList.remove('hide');
    document.getElementById('comp1').classList.add('hide');
    document.getElementById('comp3').classList.add('hide');
  }

  const switchPage3 = () => {
    document.getElementById('comp3').classList.remove('hide');
    document.getElementById('comp1').classList.add('hide');
    document.getElementById('comp2').classList.add('hide');
  }

  return (
    <div id="page">
      <Page1 switchPage2={switchPage2}></Page1>
      <Page2 p1={p1} p2={p2} setP1={setP1} setP2={setP2} switchPage3={switchPage3}></Page2>
      <Page3 p1={p1} p2={p2} ansArray={ansArray} setAnsArray={setAnsArray} setActiveP={setActiveP} activeP={activeP} count={count} setcount={setcount}></Page3>
      <Page4 setAnsArray={setAnsArray} setActiveP={setActiveP} activeP={activeP} p1={p1} p2={p2} setcount={setcount}></Page4>
    </div>
  );
}

export default App;
