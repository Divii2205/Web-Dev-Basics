import "./App.css";
import MovieRecommendation from "./components/MovieRecommendation";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movieObj) {
    const updatedWatchlist = [...watchList, movieObj];
    setWatchList(updatedWatchlist);
    console.log(updatedWatchlist);
  }

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
                <Movies handleAddtoWatchList={handleAddToWatchList} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/recommend" element={<MovieRecommendation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
