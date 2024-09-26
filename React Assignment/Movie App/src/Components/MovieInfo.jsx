import React from "react";

function MovieInfo({ movieData }) {
  return (
    <>
      {movieData && (
        <div className="flex flex-wrap  items-center ml-[60px] gap-4">
          {movieData.map((movie, i) => (
            <div key={i} className="card max-h-[60vh] w-[22vw] ">
              <div className="container flex flex-col px-[80px] bg-zinc-300 mx-auto justify-between mt-10">
                <div className="poster py-3">
                  <img
                    className="h-[180px] object-cover"
                    src={`${movie.Poster}`}
                    alt="poster"
                  />
                </div>
                <div className="info flex flex-col gap-4 py-4">
                  <h3>Title : {movie.Title}</h3>
                  <h3>Type : {movie.Type}</h3>
                  <h3>Year : {movie.Year}</h3>
                  <h3>IMDB_ID : {movie.imdbID}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MovieInfo;
