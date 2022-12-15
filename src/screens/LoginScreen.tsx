import React, { useEffect } from "react";
import { Login } from "../components/Login/Login";
import { autoLogin } from "../redux/slices/auth.slice";
import { useAppDispatch } from "../redux/store";

export const LoginScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <div className="bg-slate-900 w-full h-screen flex justify-center items-center">
      <Login />
    </div>
  );
};
