import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [txt, setTxt] = useState("Toggle Dark Mode");
  const [txtMode, setTxtMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTxt("Toggle Light Mode");
      setTxtMode('light');
      // document.body.style.backgroundColor = 'rgb(28 28 28)';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", "success");

    } else {
      setMode('light');
      setTxt("Toggle Dark Mode");
      setTxtMode('dark');
      document.body.style.color = 'black';
      // document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'; // Add background image path here
      // document.body.style.backgroundSize = 'cover';
      showAlert("Light mode enabled", "success");
    }
  }

  document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'; // Add background image path here
  document.body.style.backgroundSize = 'cover';

  return (
    <>
      <BrowserRouter >
        <Navbar title={"TextToolKit"} Mode={mode} btnTxt={txt} toggleMode={toggleMode} txtMode={txtMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About Mode={mode} />} />
            <Route exact path="/" element={<TextForm title={"Enter the text here: "} Mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
