import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login({login}) {
    const [ loginForm, setLoginForm ] = useState({username:"", password:""});
    const [ formError, setFormError] = useState(null);
    
    const navigate = useNavigate();

    function handleChange(evt) {
        evt.persist();
        setLoginForm(f => ({ ...f, [evt.target.name]: evt.target.value }))
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        login(loginForm);
        navigate('/');
    }

    const {username, password} = loginForm;

    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3">Log In</h3>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input 
                                    name="username" 
                                    id="username" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    value={username}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    value={password} 
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;