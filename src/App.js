import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (type, message) => {
    let newAlert = {
      type: type,
      message: message
    };
    setAlert(newAlert);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#042735";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };

  return (<>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  </>);
}

export default App;
