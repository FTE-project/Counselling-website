import React from "react";
import { NavbarSection } from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./image/new4.png"
import {UserSignUp, ContactForm, UserSignIn, ResetPassword, QuestionForm, RegisterCounsel,  LoginCounsel} from "./Components/Forms";


function App() {
  return (
    <div className="App">
   
   {/* <CardMultiply/> */}
       <NavbarSection/>
      {/* <SingleCardBase/>
      <ServiceCard/> */}
      <UserSignUp/>
      <ContactForm/>
      <UserSignIn/>
      <ResetPassword/>
    </div>
  );
}

export default App;
