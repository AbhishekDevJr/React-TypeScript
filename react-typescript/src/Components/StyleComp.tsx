import React from 'react'

type StyleCompProps = {
    style : React.CSSProperties
}

function StyleComp(props : StyleCompProps) {
  return (
    <div style = {props.style}>
        Styled Content Goes Here
    </div>
  )
}

export default StyleComp