import React from 'react';
import './App.css';
import GreetUser from './Components/GreetUser';
import Status from './Components/Status';
import HeaderComp from './Components/HeaderComp';
import HeaderNode from './Components/HeaderNode';
import ButtonComp from './Components/ButtonComp';
import InputComp from './Components/InputComp';
import StyleComp from './Components/StyleComp';
import Person from './Components/Person';
import UserComp from './Components/UserComp';
import CounterComp from './Components/CounterComp';

function App() {

  function handleBtnClick(e : React.MouseEvent<HTMLButtonElement>){
    console.log('Button Clicked', e);
  }

  function handleInpChange(e : React.ChangeEvent<HTMLInputElement>){
    console.log('CurrentValue : ', e.target.value)
  }

  return (
    <div className="App">
      <GreetUser name = 'Abhishek Choudhari' notificationCount = {15} isLoggedIn = {true} />
      <Status status = 'success' />
      <HeaderComp>User Info Header</HeaderComp>
      <HeaderNode><Status status = 'error' /></HeaderNode>
      <ButtonComp handleBtnClick={handleBtnClick} />
      <InputComp handleInpChange={handleInpChange} />
      <StyleComp style = {{border : '1px solid violet', fontFamily : 'revert', fontSize : '36px', textAlign : 'center'}} />
      <Person fname = 'Abhishek' lname = 'Choudhari' />
      <UserComp />
      <CounterComp />
    </div>
  );
}

export default App;
