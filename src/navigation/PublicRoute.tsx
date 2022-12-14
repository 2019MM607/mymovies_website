import React, { useEffect } from "react";
import { RootState, useAppSelector } from "../redux/store";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: IProps) => {
  const auth = useAppSelector((state: RootState) => state.auth);
  return auth.isAuthenticated ? <Navigate to="/" /> : <>{children}</>;
};
