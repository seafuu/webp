import './App.css';
import multiButton from './cgu_multiButton';
import hello from './hello';

function App() {
  return (
    <div className="App">
      <div>{hello()}</div>
      <div>{multiButton(10)}</div>
    </div>
  );
}

export default App;
