import logo from './logo.svg';
import './App.css';
// Josh Tutorial start
import Header from "./components/Header/Header";
// Josh tutorial end. 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Header/>
      {/* self close components using the "/" at the end of the component unless the componet is going to accept things inside it.*/}

    </div>
  );
}

export default App;
