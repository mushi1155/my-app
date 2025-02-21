
// import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
      
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className="container" my-3 >
      <TextForm heading= "Enter the Text to analyse"/>

    </div>
    <About/>
    
    </>
  );
}

export default App;
