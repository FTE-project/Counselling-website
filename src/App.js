import { Routes, Route, Link } from "react-router-dom";
import {UserSignUp, ContactForm, UserSignIn, ResetPassword, QuestionForm, RegisterCounsel,  LoginCounsel} from "./Components/Forms";
// import { HomeHero } from "./Components/Hero";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div className="App">
      <HomePage/>
   {/* <HomeHero/> */}
   {/* <CardMultiply/>
      <SingleCardBase/>
      <ServiceCard/> */}
      {/* <UserSignUp/>
      <ContactForm/>
      <UserSignIn/>
      <ResetPassword/> */}
    </div>
  );
}

export default App;
