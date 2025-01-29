import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Main from "./components/Main";
import FavPick from "./components/FavPick";
import RecommendedList from "./components/RecommendedList";
import PopularList from "./components/PopularList";
import BrowseByService from "./components/BrowseByService";
import NetflixRoulette from "./components/NetflixRoulette";
import WatchFindEasy from "./components/WatchFindEasy";

function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <FavPick title="FAVE PICKS ON PRIME VIDEO" />
      <FavPick title="TOP 10 THIS WEEK" />
      <FavPick title="POPULAR MOVIES" />
      <FavPick title="NEW TV SHOWS" />
      <FavPick title="TRENDING TV SHOWS" />
      <FavPick title="2024 EMMY NOMINEES" />
      <FavPick title="NEW MOVIES" />
      <FavPick title="POPULAR TV SHOWS" />
      <FavPick title="2024 CANNES FILM FESTIVAL" />
      <FavPick title="2024 MOST ANTICIPATED" />
      <FavPick title="TRENDING MOVIES" />
      <FavPick title="2024 OSCAR NOMINEES" />
      <FavPick title="DRAMA MOVIES & SHOWS" />
      <FavPick title="2024 GOLDEN GLOBE WINNERS" />
      <FavPick title="COMMEDY MOVIES AND SHOWS" />
      <RecommendedList />
      <PopularList />
      <BrowseByService />
      <NetflixRoulette />
      <WatchFindEasy />

      <Footer />
    </div>
  );
}

export default HomePage;
