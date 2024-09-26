import React, { useState } from "react";
import axios from 'axios'
import MovieInfo from "./MovieInfo";

function MovieSearch() {
  const [movieName, setMovieName] = useState("");
  const [movieData,setMovieData]=useState([])
  
  const handleClick=(e)=>{
    e.preventDefault();
    axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=2e3438e`).then((res)=>{
        setMovieData(res.data.Search)
    })
    setMovieName("")
  }
  
  return (
    <>
      <div >
        <form onSubmit={handleClick} className="mt-16 px-[200px] flex justify-between">
          <input  className="w-[30vw] outline-none focus:ring-1 rounded-md p-2 text-sm"
            type="text"
            placeholder="Search Movie Here"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button type="submit" className="bg-blue-400 px-4 py-2 rounded-lg text-white">Search</button>
        </form>
      </div>
      <MovieInfo movieData={movieData}/>
    </>
  );
}

export default MovieSearch;
