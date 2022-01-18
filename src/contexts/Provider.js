import React, { createContext, useContext,useState, useReducer } from "react";
import auth from "./reducers/auth";

export const GlobalContext = createContext();
const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};
export default function GlobalProvider({ children }) {
  const [loginState, dispatch] = useReducer(auth, initialLoginState);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <GlobalContext.Provider value={{ loginState, dispatch, isDarkTheme,setIsDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}
