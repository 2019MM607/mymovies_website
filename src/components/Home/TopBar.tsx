import React from "react";
import { useFormik } from "formik";

import { useAppDispatch } from "../../redux/store";
import { getMovies } from "../../redux/thunks/movies.thunk";

import { FaSearch, FaSignOutAlt } from "react-icons/fa";

export const TopBar = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: () => {
      dispatch(getMovies({ query: formik.values.query }));
      formik.values.query = "";
    },
  });
  return (
    <div className="shadow-xl p-4  flex bg-gray-800 fixed z-10 top-0 left-0 right-0 w-full ">
      <div className="w-full ">
        <form onSubmit={formik.handleSubmit} className="flex ">
          <input
            type="text"
            autoComplete="off"
            name="query"
            id="query"
            className=" w-full md:w-1/2 rounded-l-full bg-gray-900 p-2 focus:outline-none text-gray-600  "
            placeholder="Search a movie..."
            value={formik.values.query}
            onChange={formik.handleChange}
          />
          <button
            type="submit"
            className="bg-gray-700 rounded-r-full p-2  focus:outline-none"
          >
            <FaSearch size={15} className="text-gray-400" />
          </button>
        </form>
      </div>
      <button
        className=" text-gray-600 focus:outline-none mx-2"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        <FaSignOutAlt size={20} />
      </button>
    </div>
  );
};
