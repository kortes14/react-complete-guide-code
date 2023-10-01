import React from 'react';

//tu mozme pridat dlasie veci, napriklad
// onLogout: logoutHandler
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}
});

export default AuthContext;