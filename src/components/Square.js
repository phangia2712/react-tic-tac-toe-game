import React from 'react';

function Square(props) {
    let { value, winnerIs } = props
    console.log('winnerIs', winnerIs)
    function handleClick(){
        props.handleClickButton()
    }
  return (
    <button className={`square ${winnerIs === 'X' || winnerIs === 'O' ? 'winner' : ''}`} onClick={handleClick}>
        { value }
    </button>
  );
}

export default Square;
