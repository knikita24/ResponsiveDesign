import logo from "./logo.svg";
import "./App.css";
import Header from "./Componemts/Header/Header";
import Footer from "./Componemts/Footer/Footer";
import Body from "./Componemts/Body/Body";

function App() {
  return (
    <div className="App flex-col">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
