import logo from './logo.svg';
import './App.css';
import Textbox from './Components/Textbox.jsx'
function App() {

  const getData =()=>{

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Textbox 
          type='password'
          
        />
        <div onClick={getData}>okay</div>
      </header>
    </div>
  );
}

export default App;
