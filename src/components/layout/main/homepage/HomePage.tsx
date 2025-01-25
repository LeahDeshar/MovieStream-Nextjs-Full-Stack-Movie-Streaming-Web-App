import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Main from "./components/Main";
import FavPick from "./components/FavPick";

function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <FavPick />
      <Footer />
    </div>
  );
}

export default HomePage;
