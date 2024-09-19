import React, { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
import axios from "axios";
import MovieHeading from "./Components/MovieHeading";
import SearchBox from "./SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");
  const [Favorites, setFavorites] = useState([]);

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=f1883514`
      );

      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      alert("Error fetching data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [searchValue]);
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...Favorites, movie];
    setFavorites(newFavoriteList);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex max-sm:flex-col sm:flex-row justify-between px-4 py-4">
        <MovieHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <MovieList movies={movies} handleFavoriteClick={addFavoriteMovie} />
      <MovieHeading heading="Favorites" />
      <MovieList movies={Favorites} />
    </div>
  );
}

export default App;
