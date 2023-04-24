import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>Hello</div>
      <Header name={"Job Board"} />
      <Jobs number={9} />
      <Footer library={"React"} compagny={"Le Réacteur"} firstName={"Lalita"} />
    </>
  );
};

export default App;
