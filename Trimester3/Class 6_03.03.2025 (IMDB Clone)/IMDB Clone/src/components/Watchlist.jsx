import React, { useState } from "react";
import genreids from "../utilities/genre";

function WatchList({ watchlist }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function removeMovie(e){
  }

  return (
    <>
      {/* Search Field */}
      <div className="flex justify-center my-10 px-6">
        <input
          placeholder="Search Movies"
          className="p-4 h-12 w-full bg-gray-200 border border-slate-400 rounded-lg"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* WatchList Table */}
      <div className="p-4 w-full mx-auto">
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full bg-white dark:bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-100 text-gray-900 dark:text-gray-1000 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Rating</th>
                <th className="py-3 px-6 text-left">Popularity</th>
                <th className="py-3 px-6 text-left">Genre</th>
                <th className="py-3 px-6 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-1000 dark:text-gray-1000 text-sm font-light">
              {watchlist
                .filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((movieObj) => {
                  return (
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="flex items-center px-6 py-4">
                        <img
                          className="h-30 w-24 rounded-md mr-4"
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        />
                        <div className="mx—10">{movieObj.title}</div>
                      </td>
                      <td className="py-3 px-6">{movieObj.vote_average}</td>
                      <td className="py-3 px-6">{movieObj.popularity}</td>
                      <td className="py-3 px-6">{genreids[movieObj.genre_ids[0]]} <br/> {genreids[movieObj.genre_ids[1]]} </td>
                      <td className="py-3 px-6 text-center">
                        <button
                          className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg"
                          onClick={removeMovie}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WatchList;
