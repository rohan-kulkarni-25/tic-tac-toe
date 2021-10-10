import React from 'react'
import './Page3.css'
import '../App.css';
import vs from '../icons/vs.png'
import circle from '../icons/circle.png'
import cross from '../icons/close.png'
import Header from './Header'

export default function Page3(props) {
  const gametie = () => {
    document.getElementById('comp4').classList.remove('hide');
    document.getElementById('comp1').classList.add('hide');
    document.getElementById('comp2').classList.add('hide');
    document.getElementById('comp3').classList.add('hide');
    const div = document.getElementById('msg');
    div.innerHTML = `<p className="subhead">Game Tie</p>`
  }
  // This will Update answers when there is click
  const updateActivePlayer = () => {
    if (props.activeP === 1) {
      document.getElementById('a1').classList.remove('active');
      document.getElementById('a2').classList.add('active');
      props.setActiveP(2);
    }
    else if (props.activeP === 2) {
      document.getElementById('a1').classList.add('active');
      document.getElementById('a2').classList.remove('active');
      props.setActiveP(1);
    }
  }

  const addIcon = (active, id) => {
    const img = document.getElementById(`${id}`)
    if (active === 1) {
      img.style.backgroundImage = `url(${circle})`;
    } else {
      img.style.backgroundImage = `url(${cross})`;
    }
  }

  // This will run when player will give response
  const getClickId = (event) => {

    let c = (props.count) + 1;
    props.setcount(c);
    console.log(c)
    if (c === 9) {
      gametie();
    } else {

      const idClicked = event.target.id;
      addIcon(props.activeP, idClicked)

      const btn = document.getElementById(`${idClicked}`);
      btn.disabled = true;
      updateArray(idClicked);
      checkPlayerWin();
    }

  }

  const updateArray = (idClicked) => {
    if (props.activeP === 1) {
      let sampArr = [...props.ansArray];
      sampArr[idClicked] = "circle";
      props.setAnsArray([...sampArr]);
    } else {
      let sampArr = [...props.ansArray];
      sampArr[idClicked] = "cross";
      props.setAnsArray(sampArr);
    }
    updateActivePlayer();
  }
  const loadWinner = () => {
    if (props.activeP === 1) {
      return props.p2;
    } else {
      return props.p1;
    }
  }


  const playerWon = () => {
    document.getElementById('comp4').classList.remove('hide');
    document.getElementById('comp1').classList.add('hide');
    document.getElementById('comp2').classList.add('hide');
    document.getElementById('comp3').classList.add('hide');
    const div = document.getElementById('msg');
    div.innerHTML = `<p className="subhead">Winner IS</p>
    <p className="pN">${loadWinner()}</p>
    <p className="greet">Congratulations 🥳</p>`

  }



  const checkPlayerWin = () => {

    const sampleArray = [...props.ansArray];
    console.log(sampleArray);
    if (sampleArray[0] === sampleArray[1] && sampleArray[0] === sampleArray[2] && sampleArray[0] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[3] === sampleArray[4] && sampleArray[3] === sampleArray[5] && sampleArray[3] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[6] === sampleArray[7] && sampleArray[6] === sampleArray[8] && sampleArray[6] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[0] === sampleArray[3] && sampleArray[0] === sampleArray[6] && sampleArray[0] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[1] === sampleArray[4] && sampleArray[1] === sampleArray[7] && sampleArray[1] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[2] === sampleArray[5] && sampleArray[2] === sampleArray[8] && sampleArray[2] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[0] === sampleArray[4] && sampleArray[0] === sampleArray[8] && sampleArray[0] !== 'empty') {
      playerWon();

    }
    else if (sampleArray[2] === sampleArray[4] && sampleArray[2] === sampleArray[6] && sampleArray[2] !== 'empty') {
      playerWon();
    }

  }
  checkPlayerWin();



  return (
    <div className="page3 hide" id="comp3">
      <Header></Header>
      <div className="center">
        <p className="player1 active" id="a1">{props.p1} <img src={circle} alt="" srcset="" className="icon" /></p>
        <img src={vs} alt="" className="vs" />
        <p className="player2" id="a2">{props.p2} <img src={cross} alt="" srcset="" className="icon" /></p>
      </div>
      <div className="bottom">
        <div className="board" onChange={checkPlayerWin}>
          <div className="hor">
            <button id="0" onClick={getClickId}></button>
            <button id="1" onClick={getClickId}></button>
            <button id="2" onClick={getClickId}></button>
          </div>
          <div className="hor">
            <button id="3" onClick={getClickId}></button>
            <button id="4" onClick={getClickId}></button>
            <button id="5" onClick={getClickId}></button>
          </div>
          <div className="hor">
            <button id="6" onClick={getClickId}></button>
            <button id="7" onClick={getClickId}></button>
            <button id="8" onClick={getClickId}></button>
          </div>
        </div>
      </div>
    </div>
  )
}
