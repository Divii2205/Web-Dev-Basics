import React from "react";

import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to='/'><img className="w-[60px]" src="https://img.freepik.com/premium-photo/cinema-logo-movie-emblem-template-movie-production-logo-film-camera-logo-template-film-strip-ci_1041545-4853.jpg?semt=ais_hybrid"/></Link>

      <Link to="/"  className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>

      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </Link>
      <Link to="/recommend" className="text-blue-500 text-3xl font-bold">
        Movie Recommendations AI
      </Link>
    </div>
  );
}

export default NavBar;

