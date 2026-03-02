/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState } from "react";
import { getLocalStarage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const { employees, admin } = getLocalStarage();
    return { employees, admin };
  });

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
