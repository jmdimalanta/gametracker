import React, {useState} from "react";
import axios from "axios";
import {navigate} from '@reach/router'



const Login = (props)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = (event) =>{
        event.preventDefault();
        axios.post(
            "http://localhost:8000/api/users/login",
            {
                email: email,
                password: password,
            },
            {
                withCredentials: true,
            },
        )
        .then((res)=>{
            console.log(res, "res");
            console.log(res.data, "is res data!");
            navigate("/home");
        })
        .catch((err)=>{
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
        });
    };

    return(
        <div className="form-control w-25 mx-auto text center my-3 border border-3">
            <form onSubmit={login}>
            <h1 className="log">Login</h1>
            <p className="error-text">{errorMessage ? errorMessage: ""}</p>
                <div>
                    <label className="form-label mx-auto">Email</label>
                    <input className="form-control"
                    type = "text"
                    name = "email"
                    value = {email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="form-label mx-auto">Password</label>
                    <input className="form-control"
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <button className="btn btn-primary my-3">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;