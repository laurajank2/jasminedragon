import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
      <div className = "App">
        <Navbar />
        <Home />
        <Events />
      </div>
  );
}

export default App;
