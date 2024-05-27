import './App.css';
import Aboutme from './pages/Home';
import "./index.css"
import About from './pages/About';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <About />
      <Projects />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
