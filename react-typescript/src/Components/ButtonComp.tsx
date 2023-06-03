import React from 'react';

type ButtonCompProsp = {
    handleBtnClick : (e : React.MouseEvent<HTMLButtonElement>) => void
}

function ButtonComp(props : ButtonCompProsp) {
  return (
    <button onClick={props.handleBtnClick} type = "button">Click This</button>
  );
}

export default ButtonComp;