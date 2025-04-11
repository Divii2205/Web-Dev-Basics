import React, { useState } from "react";

function Movies() {
  const [movieData, setMovieData] = useState([]);
  const [nameComponent, setNameComponent] = useState(null);

  function getData() {
    import("./MovieData.js").then((module) => {
      setMovieData(JSON.stringify(module.movies));
    });
  }

  function getComponent() {
    const importComponent = async () => {
      const module = await import("./Name.js");
      console.log(module);
      const NameComponent = module.default;
      setNameComponent(<NameComponent />);
    };
    importComponent();
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <h3>{movieData}</h3>
      <button onClick={getComponent}>Get Name Component</button>
      {nameComponent}
    </div>
  );
}

export default Movies;
