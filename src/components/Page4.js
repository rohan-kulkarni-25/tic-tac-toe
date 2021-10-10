import React from 'react'
import './Page4.css'
import '../App.css';
import Header from './Header'

export default function Page4(props) {
  const replayGame = () => {
    props.setActiveP(1);
    props.setcount(0);
    document.getElementById('a1').classList.add('active');
    document.getElementById('a2').classList.remove('active');
    document.getElementById('comp3').classList.remove('hide');
    document.getElementById('comp4').classList.add('hide');
    props.setAnsArray(["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]);
    const btn1 = document.getElementById('1');
    const btn2 = document.getElementById('2');
    const btn3 = document.getElementById('3');
    const btn4 = document.getElementById('4');
    const btn5 = document.getElementById('5');
    const btn6 = document.getElementById('6');
    const btn7 = document.getElementById('7');
    const btn8 = document.getElementById('8');
    const btn0 = document.getElementById('0');
    const btnArry = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn0]
    btnArry.forEach(btn => {
      btn.disabled = false;
      btn.style.backgroundImage = ``;
    })
  }

  const resetGame = () => {
    window.location.reload();
  }


  return (
    <div className="page4 hide" id="comp4">
      <Header></Header>
      <div className="center" id="msg">
        {/* <p className="subhead">Winner IS</p>
        <p className="pN">{loadWinner()}</p>
        <p className="greet">Congratulations 🥳</p> */}
      </div>
      <div className="bottom">
        <button type="submit" onClick={replayGame}>REPLAY</button>
        <button type="submit" onClick={resetGame}>RESET</button>
      </div>
    </div>
  )
}
