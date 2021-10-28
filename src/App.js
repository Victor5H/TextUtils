import React,{ useState } from 'react'; 
import'./App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// '{}' every thing inside this will be considered as js code
// to run this use 'npm start' command
function App() {
  const bg_dark_color="#918583";
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#324f5c'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="#FFFFFF"
    }
  }
  return (
    <div>
      {/* sending props(property) to Navbar.*/}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* container is a bootstrap class , my-3: margin in y axis in 3 from all around*/}
      
      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" mode={mode}/>
        <About/>
      </div>
    </div>
  );
}

export default App;
