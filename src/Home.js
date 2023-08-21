import React, { useContext } from "react";
import UserContext from "./userContext";
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
                        <a className="btn btn-primary fw-bold me-3" href="/login">
                            Log in
                        </a>
                        <a className="btn btn-primary fw-bold" href="/Signup">
                            Sign up
                        </a>
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