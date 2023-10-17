import Header from "../components/Header";
import Hero from "../components/Hero";
import Updated from "../components/Updated";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

import "../App.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Updated />
      <Trending />
      <Popular />
      <Footer />
    </>
  );
};

export default Home;
