import React from 'react'
import { PersonProps } from './Types'

function Person(props : PersonProps) {
  return (
    <div>
        <h2>{props.fname} {props.lname}</h2>
    </div>
  )
}

export default Person