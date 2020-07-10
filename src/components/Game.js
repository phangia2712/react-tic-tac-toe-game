import React, { useState } from 'react';
import Board from './Board'
import Functions from '../services/Functions'
import './scss/styles.scss'

function Game(props) {

  const [data, setData] = useState({
    history: [{
      value: Array(9).fill(null)
    }],
    isX: true,
    stepNumber: 0
  })

  let status
  let currentObj = data.history[data.stepNumber]
  if(Functions.calculateWinner(currentObj.value)) {
    status = `Winner is: ${Functions.calculateWinner(currentObj.value)}`
  } else{
    status = `Next player: ${data.isX ? 'X' : 'O'}`
  }

  let moves = data.history.map((move, index) => {
    const desc =  index ? `Go to move # ${index}` : `Go to game start`
    return <li key={index}><button onClick={() => jumpTo(index)}>{desc}</button></li>
    // if (index) {
    //   return <li key={index}><button>Move to step {index}</button></li>
    // } else{
    //   return <li key={index}><button>Move to start!</button></li>
    // }
  })

  function jumpTo (index) {
    console.log('index', index)
    setData({
      ...data,
      stepNumber: index
    })
  }

  function handleClickSquare (i) {
    let historyArr = data.history.slice(0, data.stepNumber + 1)
    let currentObjTemp = historyArr[historyArr.length -1]
    // let cloneCurrentObjValueTemp = [...currentObjTemp.value] Way 1
    let cloneCurrentObjValueTemp = currentObjTemp.value.slice()
    cloneCurrentObjValueTemp[i] = data.isX ? 'X': 'O'
    console.log('cloneCurrentObjValue[i]', cloneCurrentObjValueTemp[i])
    if (Functions.calculateWinner(currentObjTemp.value) || currentObjTemp.value[i]){
      return
    }
    setData({
      ...data,
      // history: historyArr.concat([{value: cloneCurrentObjValueTemp}]), Way 1
      history: [...historyArr, ...[{value: cloneCurrentObjValueTemp}]],
      isX: !data.isX,
      stepNumber: historyArr.length
    })
  }

  return (
    <div className="game">
      <div className="status">{ status }</div>
  <ol>{moves}</ol>
      <Board value={currentObj.value} handleClickSquare={handleClickSquare}/>
    </div>
  );
}

export default Game;