import React, {useState, useContext, useEffect} from "react";
import UserContext from "./userContext.js";
import Alert from './Alert.js'
import JoblyApi from "./api";
import "./Profile.css"
import { Navigate } from "react-router-dom";

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const [ formError, setFormError] = useState([]);
    const [ formData, setFormData ] = useState( {
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    })

    const [ saveConfirmed, setSaveConfirmed ] = useState(false);

    function handleChange(evt) {
        evt.persist();
        setFormData(f => ({ ...f, [evt.target.name]:evt.target.value }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
        }

        let updatedUser;
        try {
            updatedUser = await JoblyApi.saveProfile(currentUser.username, profileData);
        } catch(err) {
            setFormError(err);
            return;
        }
        console.log(updatedUser);
        setCurrentUser(updatedUser);
        setSaveConfirmed(true);
        setFormError([]);
    }
    
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
                                    value={formData.username}
                                    onChange={handleChange}
                                    readOnly={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input 
                                    id="firstName" 
                                    name="firstName" 
                                    className="form-control" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                 />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input 
                                    id="lastName" 
                                    name="lastName" 
                                    className="form-control" 
                                    value={formData.lastName}
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
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>


                            {formError.length? 
                                <Alert type="danger" messages={formError}/>
                                : null
                            }
                            {saveConfirmed?
                                <Alert type="success" messages={["Updated successfully"]}/>
                                : null
                            }
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

