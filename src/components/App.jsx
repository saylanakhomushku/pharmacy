import React,  { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Heart from 'react-heart';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Registration from './Registration';
import Authorization from './Authorization';


export default function App({user, data}) {
  const [currUser, setCurrUser] = useState(user || {});
  const logOutHandler = () => {
    fetch('/api/logout')
      .then(() => setCurrUser({}));
  };
  return (
    <>
    <Navbar currUser={currUser} logOutHandler={logOutHandler}/>
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage data={data}/>} />
        <Route path="/page/registration" element={<Registration setCurrUser={setCurrUser} />} />
        <Route path="/page/authorization" element={<Authorization setCurrUser={setCurrUser}/>}/>
      </Routes>
    </div>
  </>  
  );
}
