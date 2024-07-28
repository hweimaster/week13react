import './App.css';
import LoginSection from './components/LoginSection';
import Nav from './Nav';//imports the info from the js file 

function App() {
  return <div className="App">
    <Nav/>
    <LoginSection/>
  </div>
    
} //returns the nav js and login js on the webpage 

export default App;
