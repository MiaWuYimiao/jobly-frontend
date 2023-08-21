import React, {useState, useContext, useEffect} from "react";
import UserContext from "./userContext.js";
import Alert from './Alert.js'
import JoblyApi from "./api";
import "./Profile.css"

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const [ formError, setFormError] = useState(null);

    function handleChange(evt) {
        evt.persist();
        setCurrentUser(f => ({ ...f, [evt.target.name]:evt.target.value }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await JoblyApi.saveProfile(username, currentUser);
        } catch(errors) {
            return <Alert errors={errors}/>
        }

    }

    const {username, firstName, lastName, email } = currentUser;
    
    return (
        <div className="Profile-form">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3">Profile</h3>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input 
                                    id="username"
                                    name="username" 
                                    className="form-control" 
                                    value={username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input 
                                    id="firstName" 
                                    name="firstName" 
                                    className="form-control" 
                                    value={firstName}
                                    onChange={handleChange}
                                 />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input 
                                    id="lastName" 
                                    name="lastName" 
                                    className="form-control" 
                                    value={lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    id="email"
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    value={email}
                                    onChange={handleChange}
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

export default Profile;
