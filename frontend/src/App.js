import React from "react";
import { Route,Router,Routes } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/LogIn" element={<LogIn/>}/>

  </Routes>
  </>
  );
}

export default App;
