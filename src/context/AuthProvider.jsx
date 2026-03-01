import React, { createContext, useState } from "react";
import { getLocalStarage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(() => {
    const { employees, admin } = getLocalStarage();
    return { employees, admin };
  });

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;