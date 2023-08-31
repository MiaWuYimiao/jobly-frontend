import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import NavBar from './NavBar';
import RoutesAll from './RoutesAll';
import UserContext from './userContext';
import useLocalStorage from './hooks/useLocalStorage';
import JoblyApi from "./api";
import background from "./img/image.png";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect( () => {
    async function getCurrentUser() {
      if(token) {
        try {
          let decodedToken = decodeToken(token);
          JoblyApi.token = token;
          let res = await JoblyApi.getCurrentUser(decodedToken.username);
          setCurrentUser(res);
          return {success: true};
        } catch(err) {
          return {success:false, err};
        }
      }
    }
    getCurrentUser();
  }, [token]);


  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function login(loginForm) {
    try {
      const token = await JoblyApi.login(loginForm);
      setToken(token);
      return {success: true};
    } catch(err) {
      console.log("login error:", err);
      return {success:false, err};
    }
  }

  async function signup(signupForm) {
    try {
      const token = await JoblyApi.signup(signupForm);
      setToken(token);
      return {success: true};
    } catch(err) {
      console.log("signup error:", err);
      return {success:false, err};
    }
  }

  function hasAppliedToJob(jobId) {
    return applicationIds.has(jobId)
  }

  async function applyToJob(jobId) {
    try {
      JoblyApi.applyToJob(currentUser.username, jobId);
      setApplicationIds(oldIds => (new Set([...oldIds, jobId])))
      return {success: true};
    } catch(err) {
      return {success:false, err};
    }
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout}/>
          <div className="pt-5 Route" style={{ backgroundImage: `url(${background})`}}>
            <RoutesAll signup={signup} login={login}/>
          </div>
        </BrowserRouter >
      </div>
    </UserContext.Provider>
  );
}

export default App;
