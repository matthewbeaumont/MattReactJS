import logo from "./logo.svg";
import "./App.css";
// Below are the components that I am importing into the main app.js component.
import Header from "./components/Header/Header1/Header1.component";
import Galleryflexbox from "./components/Gallery/Galleryflexbox/Galleryflexbox.component";
// import Welcomeimage from "./components/Header/Welcomeimage";
// import ImageTwo from "./components/Header/ImageTwo";

// Below is a component.
export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   </div>
    <>
      {/* Below are my components that will render in the app. Note that they must be contained within a single parent element (either a div or a react fragment).*/}
      {/* self close components using the "/" at the end of the component unless the component is going to accept things inside it.*/}
      <Header />
      {/* <Welcomeimage />
      <ImageTwo /> */}
      <Galleryflexbox />
    </>
  );
}
