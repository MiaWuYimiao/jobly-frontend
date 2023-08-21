import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";

function RoutesAll({login, signup}) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/companies" element={<CompanyList />}></Route>
            <Route exact path="/companies/:handle" element={<CompanyDetail />}></Route>
            <Route exact path="/jobs" element={<JobList />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/signup" element={<Signup signup={signup}/>}></Route>
            <Route exact path="/login" element={<Login login={login}/>}></Route>
        </Routes>
    )
}

export default RoutesAll;