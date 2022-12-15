import React from "react";
import { useFormik } from "formik";

import { useAppDispatch } from "../../redux/store";
import { login } from "../../redux/thunks/auth.thunk";
import { SnackBar } from "../utils/SnackBar";

export const Login = () => {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      if (
        formik.values.email === import.meta.env.VITE_EMAIL &&
        formik.values.password === import.meta.env.VITE_PASSWORD
      ) {
        dispatch(
          login({
            email: formik.values.email,
            password: formik.values.password,
          })
        );
      } else {
        setIsError(true);
        setOpen(true);
        formik.values.email = "";
        formik.values.password = "";
      }
    },
  });
  return (
    <div
      className={`bg-white p-2 md:w-1/2 lg:w-1/3 w-[90%] rounded-lg animate__animated animate__flipInY flex flex-col items-center ${
        isError && "animate__shakeX"
      }`}
    >
      <div className=" shadow-2xl   w-16 h-16 rounded-full flex justify-center items-center  ">
        <span className=" text-slate-900 p1 text-lg font-bold">MW</span>
      </div>
      <h1 className="text-slate-900 font-semibold text-lg mt-10">
        Welcome to your movies site
      </h1>
      <form className="mt-10 w-full" onSubmit={formik.handleSubmit}>
        <div className="m-4 p-1 flex justify-end flex-col ">
          <label htmlFor="email" className="text-slate-900 self-start mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-slate-900 "
            placeholder="some@some.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="m-4 p-1 flex justify-end flex-col">
          <label htmlFor="password" className="text-slate-900 self-start mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-slate-900 "
            value={formik.values.password}
            onChange={formik.handleChange}
            autoComplete="off"
          />
        </div>

        <div className="m-4 p-1 flex justify-end flex-col">
          <input
            type="submit"
            value="Login"
            className="bg-slate-900  w-full rounded-lg p-2 text-white"
          />
        </div>
      </form>
      {isError ? (
        <SnackBar
          open={open}
          setOpen={setOpen}
          message={"Incorrect Credentials"}
          severity={"error"}
        />
      ) : null}
    </div>
  );
};
