import React from "react";
import { useNavigate } from "react-router-dom";

import { Details } from "../../hooks/useMovieInfo";
import { Result } from "../../redux/thunks/movies.thunk";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

interface IProps {
  movies: Result[] | Details[];
}
export const MovieList = ({ movies }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5 mx-2 place-items-center">
      {movies?.length > 0 &&
        movies.map((movie) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={movie?.id}
            className="flex flex-col shadow-md rounded-lg bg-gray-800 cursor-pointer w-60  justify-start items-center  "
            onClick={() => navigate(`/details/${movie?.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
              className="w-60 h-80 rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center items-center gap-1 mb-2">
              <p className="text-gray-200 font-semibold mt-1 text-md font- text-center">
                {movie?.title}
              </p>
              <div className="bg-gray-600 px-3 py-1  rounded-full flex items-center gap-1">
                <p className="text-gray-200 font-regular text-sm  w-fit text-center">
                  {movie?.vote_average.toFixed(1)}
                </p>
                <AiFillStar className="text-yellow-400 text-xs" />
              </div>
              <p className="text-gray-200  text-sm rounded-full w-fit text-center">
                {movie?.release_date}
              </p>
            </div>
          </motion.div>
        ))}
    </div>
  );
};
