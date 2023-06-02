import React from 'react'

type HeaderNodePorps = {
    children : React.ReactNode
}

function HeaderNode(props : HeaderNodePorps) {
  return (
    <div className = "container-header-node">
        <h1>{props.children}</h1>
    </div>
  )
}

export default HeaderNode