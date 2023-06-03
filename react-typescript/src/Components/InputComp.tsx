import React from 'react'

type InputCompProps = {
    handleInpChange : (e : React.ChangeEvent<HTMLInputElement>) => void
}

function InputComp(props : InputCompProps) {
  return (
    <input type = "text" onChange={props.handleInpChange}/>
  )
}

export default InputComp