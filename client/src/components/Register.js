import React, {useState, useEffect} from "react";
import axios from "axios";



const Register = (props)=>{

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data);
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setConfirmReg(
                "Thank you for registering, you can now log into the Gametracker!"
            );
            setErrors({});
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }




    return(
        <div>
            <h1>Register</h1>
            {confirmReg ? <h3 style={{color:"green"}}>{confirmReg}</h3> : null}
            <form onSubmit={register}>
                <div>
                    <label>First Name</label>
                    <input
                        type = "text"
                        name = "firstName"
                        value = {user.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.firstName ? (
                        <span className= "error-text">
                            {errors.firstName.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type = "text"
                        name = "lastName"
                        value = {user.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.lastName ? (
                        <span className= "error-text">
                            {errors.lastName.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type = "text"
                        name = "email"
                        value = {user.email}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.email ? (
                        <span className= "error-text">
                            {errors.email.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label>Password</label>                    
                    <input
                        type = "text"
                        name = "password"
                        value = {user.password}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.password ? (
                        <span className= "error-text">
                            {errors.password.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type = "text"
                        name = "confirmPassword"
                        value = {user.confirmPassword}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.confirmPassword ? (
                        <span className= "error-text">
                            {errors.confirmPassword.message}
                        </span>
                    ) : null}
                </div>
                <div className = "center">
                        <button>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;