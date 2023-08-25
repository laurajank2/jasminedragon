import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Home from './components/Home';
import BobaBar from './components/BobaBar';
import StaggeredBoba from './components/StaggeredBoba';
import Dragons from './components/Dragons';
import Stamps from './components/Stamps';
import Walk from './components/Walk';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
      <div className = "App">
        <Navbar />
        <Home />
        <Walk />
        <Events />
        <BobaBar />
        <StaggeredBoba />
        <Dragons />
        <Stamps />
      </div>
  );
}

export default App;
