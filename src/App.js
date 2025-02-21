
// import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert , setAlert]=useState("null");
  const showAlert= (message , type)=>{
    setAlert({
      msg: message,
      type:type,
    })

  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container" my-3 >
      <TextForm heading= "Enter the Text to analyse" mode={mode}/>

    </div>
    <About/>
    
    </>
  );
}

export default App;
