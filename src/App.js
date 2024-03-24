import "./App.css";
import Hangman from "./Hangman.js";
import Header from "./Header.js";
import Gallows from "./Gallows.js";

const App = () => {
  return (
    <>
      <Header />
      <Gallows/>
      <Hangman />
    </>
  );
};

export default App;
