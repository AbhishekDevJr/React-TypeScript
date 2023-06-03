import React from 'react'

type HeaderNodePorps = {
    children : React.ReactNode
}

function HeaderNode(props : HeaderNodePorps) {
  return (
    <div className = "container-header-node">
        {props.children}
    </div>
  )
}

export default HeaderNode