import "./App.css";
import MovieRecommendation from "./components/MovieRecommendation";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import { MovieContext } from "./context/MovieContext";

function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movieObj) {
    const updatedWatchlist = [...watchList, movieObj];
    localStorage.setItem("WatchListMovies", JSON.stringify(updatedWatchlist));
    setWatchList(updatedWatchlist);
    console.log(updatedWatchlist);
  }

  function handleRemoveFromWatchList(movieObj) {
    const updatedWatchlist = watchList.filter((obj) => obj.id !== movieObj.id)
    localStorage.setItem("WatchListMovies", JSON.stringify(updatedWatchlist));
    setWatchList(updatedWatchlist);
    console.log(updatedWatchlist);
  }

  useEffect(() => {
    let watchListData = localStorage.getItem("WatchListMovies");

    if (watchListData) {
      setWatchList(JSON.parse(watchListData));
    }
  }, []);

  return (
    <>
      <MovieContext.Provider
        value={{ handleAddToWatchList, watchList, handleRemoveFromWatchList }}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner /> <Movies />
                </>
              }
            />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/recommend" element={<MovieRecommendation />} />
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  );
}

export default App;
