import { useState } from 'react';
import './App.css';
import Nevbar from './Components/Nevbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './Components/About';
// import styles from './Component.button.css'; 
// import styles from'./public.button.css'; // Import the CSS file


function App() {

const [mode, setMode]= useState('light');
const [alert, setAlert]=useState(null);

const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type: type,
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);

};

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    showAlert("darkmode has been enabled","success");
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("darkmode has been desabled","success");

  }
};

return (
  <>
      <Router>
    <Nevbar
      title="Textutils"
      About="About here"
      mode={mode}
      toggleMode={toggleMode}
    />
    <Alert alert={alert} />
    <div className="container ">
      {/* <TextForm showAlert={showAlert} heading="Enter the text here" />  */}
      {/* <About/> */}

        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/> }/>
         
          <Route path="/About" element={<About />}/>
        </Routes>
    </div>
      </Router> 
  </> 
);
}

export default App;



