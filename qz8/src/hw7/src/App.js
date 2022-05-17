import './App.css';
import name from './name.js';
import button from './but.js';
import login from './cgu.js';
import password from './password';


function App() {
  return (
<div className="App">
      
      <div>{login()}</div>
      <div>{name()}</div><br></br>
      <div>{password()}</div><br></br>
      <div>{button()}</div>

      </div>
     
  );
}

export default App;
