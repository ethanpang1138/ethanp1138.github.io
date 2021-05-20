import logo from './logo.svg';
import './css/styles.css'
import './css/custom.css'
import Navbar from "./components/Navbar"
import Education from "./components/Education"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Education/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
