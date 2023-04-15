
import './App.css';
import Navbar from './components/Navbar';
import Myform from './components/Myform';
import react, { useState } from 'react';

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>

      
      {/* <Navbar title="hello" aboutUs="mony" thapa="nirajan"/> */}
      <Navbar title='online2' mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      {/* <About/> */}
    
       <Myform heading="enter the text to analyze" mode={mode}/>  
      </div>
      
      
    </>
  );
}

export default App;
