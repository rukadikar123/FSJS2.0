import React from "react";

function MovieInfo({ movieData }) {
  return (
    <>
      {movieData && (
        <div >
          {movieData.map((movie, i) => (
            <div className="container flex flex-wrap px-[80px] bg-zinc-300 mx-auto justify-between mt-10" key={i}>
              <div className="info flex flex-col gap-6 py-4">
                <h3>Title : {movie.Title}</h3>
                <h3>Type : {movie.Type}</h3>
                <h3>Year : {movie.Year}</h3>
                <h3>IMDB_ID : {movie.imdbID}</h3>
              </div>
              <div className="poster py-4">
                <img className="h-[180px] w-full object-cover"
                  src={`${movie.Poster}`}
                  alt="poster"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MovieInfo;
