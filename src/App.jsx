import "./App.css";
import { Header } from "./components/Header";
import { MiddleContents } from "./components/MiddleContents";
import { Skills } from "./components/Skills";
import { Theone } from "./components/Theone";

function App() {
  return (
    <>
      <Header />
      <Theone />
      <MiddleContents />
      <Skills />
    </>
  );
}

export default App;
