import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Populer from "./components/Populer";
import Footer from "./components/Footer";
import Updated from "./components/Updated";
import Ongoing from "./components/Ongoing";

import "../src/App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Updated />
      <Trending />
      <Populer />
      <Ongoing />
      <Footer />
    </>
  );
}

export default App;
