import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/main";
import { MiddleContents } from "./components/MiddleContents";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Main />
      <MiddleContents />
      <Skills />
    </>
  );
}

export default App;
