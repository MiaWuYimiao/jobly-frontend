import React, { useContext } from "react";
import UserContext from "./userContext";
import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
    const { currentUser } = useContext(UserContext);
    if(!currentUser){
        return (
            <div className="Home">
                <div className="container text-center" >
                    <h1 className="mb-4 fw-bold">Jobly</h1>
                    <p className="lead">All the jobs in one, convenient place.</p>
                    <p>
                        <Link className="btn btn-primary fw-bold me-3" to="/login">
                            Log in
                        </Link>
                        <Link className="btn btn-primary fw-bold" to="/signup">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="Home">
            <div className="container text-center" >
                <h1 className="mb-4 fw-bold">Jobly</h1>
                <p className="lead">All the jobs in one, convenient place.</p>
                <h2>{`Welcome Back, ${currentUser.username}!`}</h2>
            </div>
        </div>
    )

}

export default Home;