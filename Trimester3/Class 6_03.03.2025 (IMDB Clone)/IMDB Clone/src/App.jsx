import "./App.css";
import MovieRecommendation from "./components/MovieRecommendation";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movieObj) {
    const updatedWatchlist = [...watchList, movieObj];
    localStorage.setItem("WatchListMovies", JSON.stringify(updatedWatchlist));
    setWatchList(updatedWatchlist);
    console.log(updatedWatchlist);
  }

  useEffect(() => {
    let watchListData = localStorage.getItem("WatchListMovies");

    if (!watchListData) {
      return;
    }

    setWatchList(JSON.parse(watchListData));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies handleAddtoWatchList={handleAddToWatchList} watchlist={watchList}/>
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchList} />}
          />
          <Route path="/recommend" element={<MovieRecommendation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
