import React from 'react';
import Square from './Square'
import Functions from '../services/Functions'

function Board(props) {

  let { value } = props
  console.log('value', value)

  function renderSquare(i){
    return <Square winnerIs={Functions.calculateWinner(value)} value={value[i]} handleClickButton={() => props.handleClickSquare(i)} />
  }

  return (
    <div className="board">
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
