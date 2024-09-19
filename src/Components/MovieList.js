import React from "react";

function MovieList(props) {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {props.movies.map((movie) => {
          return (
            <div
              key={movie.imdbID}
              className="relative group flex flex-col gap-2 hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              {/* Movie Poster */}
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-48 h-auto"
              />

              {/* Favorite Icon: Hidden by default, shown on hover */}
              <button className="absolute bottom-10 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black px-2 py-1 ">
                Add to Favorite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white bg-black"
                  onClick={() => props.handleFavoriteClick(movie)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </button>

              {/* Movie Title */}
              <h2 className="text-lg font-bold">{movie.Title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
