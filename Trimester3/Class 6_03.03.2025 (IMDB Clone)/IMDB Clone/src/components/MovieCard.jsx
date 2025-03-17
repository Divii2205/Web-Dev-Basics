import React, { useState } from "react";

function MovieCard({ movieObj, handleAddToWatchList }) {
  const [iconToggle, setIconToggle] = useState(false);

  function toggleIcon() {
    setIconToggle(!iconToggle);
  }

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(${
          movieObj.poster_path
            ? `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
        })`,
        backgroundSize: movieObj.poster_path ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f3f3f3",
      }}
    >
      <div
        className="absolute top-2 right-2 w-fit justify-center p-3 bg-gray-900/70 rounded-lg cursor-pointer"
        onClick={() => {
          toggleIcon();
          if (!iconToggle) {
            handleAddToWatchList(movieObj);
          }
        }}
      >
        <i
          className={`text-lg ${
            iconToggle ? "fa-solid text-red-500" : "fa-regular text-white"
          } fa-heart`}
        ></i>
      </div>

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
