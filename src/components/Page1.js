import React from 'react'
import './Page1.css'
import '../App.css';

export default function Page1(props) {
  return (
    <div className="page1" id="comp1">
      <div className="top">
        <p>TIC-TAC</p>
        <p>TOE</p>
      </div>
      <div className="center">
        <button type="submit" onClick={props.switchPage2}>Let's Play</button>
      </div>
      <div className="bottom">
        Made with ❤️ by Rohan Kulkarni
      </div>
    </div>
  )
}
