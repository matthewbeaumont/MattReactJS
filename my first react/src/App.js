import logo from "./logo.svg";
import "./App.css";
// Below are the components that I am importing into the main app.js component.
import {
  Header,
  Galleryflexbox,
  PropsContainer,
  Children,
  Conditionals,
} from "./components/index";

// Below is the old way of importing components from theri actual folder location rather than via the index.js file.
// import Welcomeimage from "./components/Header/Welcomeimage";
// import ImageTwo from "./components/Header/ImageTwo";

// Below is a component.
export default function App() {
  return (
    <>
      {/* Below are my components that will render in the app. Note that they must be contained within a single parent element (either a div or a react fragment).*/}
      {/* self close components using the "/" at the end of the component unless the component is going to accept things inside it.*/}
      <Header />
      {/* <Welcomeimage />
      <ImageTwo /> */}
      <Galleryflexbox />

      <PropsContainer drink="wine" />

      <Children />

      <Conditionals />
    </>
  );
}
