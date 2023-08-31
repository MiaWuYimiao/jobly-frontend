import React, { useContext } from "react";
import UserContext from "./userContext";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({logout}) {
    const { currentUser } = useContext(UserContext);
    if(!currentUser){
        return (
            <nav className="Navigation navbar navbar-expand-md">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/">Jobly</NavLink>
                    <ul class="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" exact to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" exact to="/signup">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    return (
        <nav className="Navigation navbar navbar-expand-md">
            <div className="container-fluid">
                <NavLink className="navbar-brand" exact to="/">Jobly</NavLink>
                <ul class="navbar-nav ms-auto">
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/companies">Companies</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/jobs">Jobs</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" onClick={logout} exact to="/">Log out {currentUser.username}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;