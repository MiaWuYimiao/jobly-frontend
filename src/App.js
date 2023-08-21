import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import NavBar from './NavBar';
import RoutesAll from './RoutesAll';
import UserContext from './userContext';
import JoblyApi from "./api";

const token = "YOUR JWT";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect( () => {
    async function getCurrentUser() {
      if(token) {
        try {
          let decodedToken = decodeToken(token);
          JoblyApi.token = token;
          let res = await JoblyApi.getCurrentUser(decodedToken.username);
          setCurrentUser(res);
        } catch(err) {

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
    } catch(err) {

    }
  }

  async function signup(signupForm) {
    try {
      const token = await JoblyApi.signup(signupForm);
      setToken(token);
    } catch(err) {

    }
  }

  function hasAppliedToJob(jobId) {
    return applicationIds.has(jobId)
  }

  async function applyToJob(jobId) {
    try {
      JoblyApi.applyToJob(currentUser.username, jobId);
      setApplicationIds(oldIds => ([...oldIds, jobId]));
    } catch(err) {

    }
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout}/>
          <div className="pt-5">
            <RoutesAll signup={signup} login={login}/>
          </div>
        </BrowserRouter >
      </div>
    </UserContext.Provider>
  );
}

export default App;
