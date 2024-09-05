import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let login = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  let logout = (callback) => {
    setUser(null);
    callback();
  };

  let value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
