import { Routes, Route, Link } from "react-router-dom";
import {UserSignUp, ContactForm, UserSignIn, ResetPassword, QuestionForm, RegisterCounsel,  LoginCounsel} from "./Components/Forms";


function App() {
  return (
    <div className="App">
   
   {/* <CardMultiply/>
      <SingleCardBase/>
      <ServiceCard/> */}
      <UserSignUp/>
      <ContactForm/>
      <UserSignIn/>
      <ResetPassword/>
    </div>
  );
}

export default App;
