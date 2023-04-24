import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Jobs />
      <Footer library={"React"} compagny={"Le Réacteur"} firstName={"Lalita"} />
    </>
  );
};

export default App;
