import "./App.css";
import { BrowserRouter, } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
