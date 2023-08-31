import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Alert from './Alert.js'
import "./Signup.css"

function Signup({signup}) {
    const initialFormData ={
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
    }
    const navigate = useNavigate();

    const [ signupForm, setSignupForm ] = useState(initialFormData);
    const [ formError, setFormError] = useState([]);

    function handleChange(evt) {
        evt.persist();
        setSignupForm(f => ({ ...f, [evt.target.name]:evt.target.value }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await signup(signupForm);
        console.log(result);

        if(result.success){
            navigate('/');
        } else {
            setFormError(result.err);
        }
    }

    const {username, password, firstName, lastName, email } = signupForm;
    
    return (
        <div className="Signup-form">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3">Sign Up</h3>
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
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    value={password} 
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

                            {formError.length? 
                                <Alert type="danger" messages={formError}/>
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

export default Signup;

