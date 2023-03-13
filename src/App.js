import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const[Mystyle,setMystyle]=useState(
    {
      color:'black',
      backgroundColor:'white'
    }
  )
  const[btn,setBtn]=useState('dark');
  const[theme,setTheme]=useState('light');
  const toggle=()=>{
    if(btn==='dark')
    {
      setMystyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtn('light')
      setTheme('dark')
      document.body.style.backgroundColor='black'
    }
    else{
      setMystyle(
        {
          color:'black',
          backgroundColor:'white'
        }
      )
      setBtn('dark')
      setTheme('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title="Text-Utils" about="About Us" toggle={toggle} btn={btn} Mystyle={Mystyle} theme={theme}/>
    <div className="container my-3">
    <TextArea heading="Analyze your text here" toggle={toggle} btn={btn} Mystyle={Mystyle} theme={theme}/>
    <About toggle={toggle} btn={btn} Mystyle={Mystyle} theme={theme}/>
    </div>
    </>
    
  );
}

export default App;
