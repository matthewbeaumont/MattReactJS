import logo from './logo.svg';
import './App.css';
// Below are the 2 new components that I am importing into the main app.js component. 
import Header from "./components/Header/Header";
import Welcomeimage from "./components/Header/Welcomeimage";

// Below is a component. 
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
{/* Below are my 2 components. Note that they need to be conatined within the division as only a single parent element can be inside the App component (or any other component).*/}
      <Header/>
      {/* self close components using the "/" at the end of the component unless the componet is going to accept things inside it.*/}
      <Welcomeimage/>

    </div>
  );
}

export default App;
