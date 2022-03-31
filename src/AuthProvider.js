import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { Rings } from "react-loader-spinner";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div className="mx-auto" style={{marginTop: "10%" }}>
       <Rings
       height="300"
       width="300"
       color='orange'
       ariaLabel='loading'
       />
      
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
