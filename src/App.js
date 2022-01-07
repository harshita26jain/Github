
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from "./components/Textform.1";


function App() {
  
  return (
    <>
   {/* <Navbar/>*/}
    <Navbar title="textutils"/>
    <div className="container my-3">
      <Textform heading="enter the text"/>
      <About/>
    </div>
    
    </>
  )
}

export default App;
