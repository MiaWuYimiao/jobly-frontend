import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function RoutesAll({login, signup}) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/companies" element={
                <PrivateRoute><CompanyList /></PrivateRoute>} 
            />
            <Route exact path="/companies/:handle" element={
                <PrivateRoute><CompanyDetail /></PrivateRoute>}
            />
            <Route exact path="/jobs" element={
                <PrivateRoute><JobList /></PrivateRoute>} 
            />
            <Route exact path="/profile" element={
                <PrivateRoute><Profile /></PrivateRoute>} 
            />
            <Route exact path="/signup" element={<Signup signup={signup}/>} />
            <Route exact path="/login" element={<Login login={login}/>} />
            <Route exact path="*" element={<Home />} />
        </Routes>
    )
}

export default RoutesAll;