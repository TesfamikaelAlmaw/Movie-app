import React, { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
import axios from "axios";
import MovieHeading from "./Components/MovieHeading";
import SearchBox from "./Components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");
  const [favorites, setFavorites] = useState([]);

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
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
  }, [searchValue, getMovie]);

  const addFavoriteMovie = (movie) => {
    const isAlreadyFavorite = favorites.some(
      (fav) => fav.imdbID === movie.imdbID
    );

    if (isAlreadyFavorite) {
      alert("Movie already in favorites");
      return;
    }

    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    alert("Movie added to favorites");
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
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
      <MovieList movies={favorites} removeFavoriteMovie={removeFavoriteMovie} />
    </div>
  );
}

export default App;
