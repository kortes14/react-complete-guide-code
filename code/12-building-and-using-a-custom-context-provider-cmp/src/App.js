import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
//importujem sem default export z context providera, a nie ten cely komponent AuthContextProvider
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  //vsetky login auth handle functions boli presunute do auth-context.js
  //a naspet som vratil React.Fragment
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
