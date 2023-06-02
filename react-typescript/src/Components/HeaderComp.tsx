import React from 'react'

type HeaderCompProps = {
    children : string
}

function HeaderComp(props : HeaderCompProps) {
  return (
    <div className = "container-header">
        <h1>{props.children}</h1>
    </div>
  )
}

export default HeaderComp