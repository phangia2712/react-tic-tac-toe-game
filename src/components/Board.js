import React, { useState } from 'react';
import Square from './Square'

function Board(props) {
  const [data, setData] = useState({
    value: Array(9).fill(null),
    isX: true
  })
  // const status = `Next player: ${data.isX ? 'X' : 'O'}`
  let status
  if(calculateWinner(data.value)) {
    status = `Winner is: ${calculateWinner(data.value)}`
  } else{
    status = `Next player: ${data.isX ? 'X' : 'O'}`
  }

  function handleClickSquare(i){
    if (calculateWinner(data.value) || data.value[i]){
      return
    }
    let cloneValue = [...data.value]
    cloneValue[i] = data.isX ? 'X': 'O'
    console.log('cloneValue', cloneValue)
    setData({...data, value: cloneValue, isX: !data.isX})
  }
  function renderSquare(i){
    return <Square winnerIs={calculateWinner(data.value)} value={data.value[i]} handleClickButton={() => handleClickSquare(i)} />
  }
  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="board">
        <div className="status">{ status }</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
    </div>
  );
}

export default Board;
