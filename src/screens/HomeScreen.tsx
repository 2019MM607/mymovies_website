import React from "react";
import { useSelector } from "react-redux";
import { TopBar } from "../components/Home/TopBar";
import { MovieList } from "../components/utils/MovieList";
import { RootState, useAppDispatch } from "../redux/store";
import { getMovies } from "../redux/thunks/movies.thunk";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { movies } = useSelector((state: RootState) => state.movies);

  React.useEffect(() => {
    dispatch(getMovies({ query: "" }));
  }, []);

  return (
    <div className=" bg-slate-900">
      <TopBar />
      <div className="  mt-24">
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <h1 className="text-white">There are not movies yet</h1>
        )}
      </div>
    </div>
  );
};


