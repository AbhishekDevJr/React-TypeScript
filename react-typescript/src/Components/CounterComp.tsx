import React from 'react'
import { useState, useReducer } from 'react'

function CounterComp() {

    type StateType = {
        count : number
    }

    const initialState : StateType = {
        count : 0
    }

    const [state, dispatch] = useReducer(countReducer, initialState)

    type Action = {
        type : string
    }

    function countReducer(state : StateType, action : Action){
        if(action.type === 'increment'){
            return({count : state.count + 1});
        }
        else if(action.type === 'decrement'){
            console.log('decrement');
            return({count : state.count - 1});
        }
        else{
            return state;
        }
    }

    function handleIncrement(e : React.MouseEvent<HTMLButtonElement>){
        dispatch({
            type : 'increment'
        });
    }

    function handleDecrement(e : React.MouseEvent<HTMLButtonElement>){
        dispatch({
            type : 'decrement'
        });
    }

    return (
        <div>
            <h1>Current Count : {state.count}</h1>
            <button onClick={handleIncrement} type="button">Increment</button>
            <button onClick={handleDecrement} type="button">Decrement</button>
        </div>
    )
}

export default CounterComp