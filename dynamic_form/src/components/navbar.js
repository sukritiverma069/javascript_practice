// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import Table1 from './Table1'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
        
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      
    </div>
  );
};

export default NavBar;