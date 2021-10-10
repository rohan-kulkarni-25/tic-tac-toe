import React from 'react'
import './Page2.css'
import '../App.css';
import vs from '../icons/vs.png'
import circle from '../icons/circle.png'
import cross from '../icons/close.png'
import Header from './Header'

export default function Page2(props) {
  // UPDATES NAME OF PLAYERS 
  const updateName1 = () => {
    let name = document.getElementById('player1').value
    props.setP1(name);
  }
  const updateName2 = () => {
    let name = document.getElementById('player2').value;
    props.setP2(name);
  }

  return (
    <div className="page2 hide" id="comp2">
      <Header></Header>
      <div className="center">
        <p>Enter Player Names:</p>
        <label htmlFor=""><input type="text" name="player1" id="player1" placeholder="Player 1" onChange={updateName1} /></label>
        <label htmlFor=""><input type="text" name="player2" id="player2" placeholder="Player 2" onChange={updateName2} /></label>
        <button type="submit" onClick={props.switchPage3}>Let's Play</button>
      </div>
      <div className="bottom">
        <p className="player1">{props.p1} <img src={circle} alt="" srcset="" className="icon" /></p>
        <img src={vs} alt="" className="vs" />
        <p className="player2">{props.p2} <img src={cross} alt="" srcset="" className="icon" /></p>
      </div>
    </div >
  )
}
