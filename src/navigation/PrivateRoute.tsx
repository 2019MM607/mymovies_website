import React, { ReactElement, ReactNode, useEffect } from "react";
import { RootState, useAppSelector } from "../redux/store";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: IProps) => {
  const { pathname } = useLocation();
  console.log(typeof pathname);

  const auth = useAppSelector((state: RootState) => state.auth);
  return auth.isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};
