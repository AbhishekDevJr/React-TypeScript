import React from 'react';
import './App.css';
import GreetUser from './Components/GreetUser';
import Status from './Components/Status';
import HeaderComp from './Components/HeaderComp';
import HeaderNode from './Components/HeaderNode';

function App() {
  return (
    <div className="App">
      <GreetUser name = 'Abhishek Choudhari' notificationCount = {15} isLoggedIn = {true} />
      <Status status = 'success' />
      <HeaderComp>User Info Header</HeaderComp>
      <HeaderNode><Status status = 'error' /></HeaderNode>
    </div>
  );
}

export default App;
