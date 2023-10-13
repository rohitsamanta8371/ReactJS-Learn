//import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Stateform from './components/Stateform';
import React, {useState} from 'react'
import About from './components/About';

//import About from './components/About';
//npm install react-router-dom  --for install router in react
function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const[modeText,setModeText]=useState("Enable Dark Mode");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      setModeText("Disable Dark Mode");
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Enabled","success");
      document.title="Coaljunction Dark Mode";
    }
    else{
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode Disabled","success");
      document.title="Coaljunction Light Mode";
    }
  }
  const showAlert=(msg,type)=>{
    setAlert({
      message : msg,
      type : type
    });
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  return (
    <>
      <Router>
        {/* sending props.title to Navbar */}
        <Navbar title="Coaljunction" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element={<About />} /> {/* exact patch for no paruial mapping */}
            <Route exact path='/' element={<Stateform heading="Text Converter" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
