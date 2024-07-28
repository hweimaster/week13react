//Using create-react-app, create a new React project. 
//Create a LoginForm component that contains the following:
//Username and password input fields, an h3 that says Log In, 
//with a border. Style the component using the default generated CSS file.

import React from 'react'

export default function Login(){
    return (
        <div className="login-form-container"> 
            <form className="login-form">
                <div className = "login-form-content">
                    <h3 className="login-form-title">Login</h3>
                    <div className="form-group mt-2">
                        <label>Username</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Username"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Password</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Password"
                        />
                    </div>
                    <div className="d-grip gap-2 mt-3">
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    
    )
}
//created a container that has login coinatiner and in that 
//is a fom control to be able to add in the text
//then at the bottom we have a submit button