"use client";
import {
  AuthDispatchContext,
  AuthStateContext,
} from "@/providers/auth/AuthContext";
import { TAuthDispatch, TUser } from "@/types/auth";
import React, { useContext, useEffect, useReducer } from "react";
import authReducer from "./authReducer";
import { auth } from "@/lib/firebase";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authenticated: false,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) dispatch({ type: "LOGIN", payload: { user: user as TUser } });
      else dispatch({ type: "LOGOUT" });
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch: () => TAuthDispatch = () =>
  useContext(AuthDispatchContext);
export default AuthProvider;
