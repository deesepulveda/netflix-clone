import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // Generate Random Movie Content
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // Axios API Request
  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  //   console.log(movie);

  // Truncate String

  const truncatingString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        {/* Black Overlay from Left to Right */}
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {/* ? == optional chaining */}
        {/* Jumbotron Image and Content Info */}
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        {/* Jumbotron Content Container */}
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          {/* Content Movie Title */}
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          {/* Watch Later & Play Buttons */}
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-gray-500 hover:border-gray-500 hover:text-white">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 ml-4 px-5 hover:bg-white hover:text-black">
              Watch Later
            </button>
          </div>
          {/* Release Date Content */}
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          {/* Content Summary */}
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncatingString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
