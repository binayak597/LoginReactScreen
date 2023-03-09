import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function Register({setUser}){
    const history = useHistory();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });
    function handleChange(event){
    const {name, value} = event.target;
    setNewUser((prevUser) => {
        return{
            ...prevUser,
            [name]: value
        }
    })   
    }

    function handleClick(){
        const {name, email, password, reEnterPassword} = newUser;
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", newUser)
        .then(res => {
            alert(res.data.message);
            history.push("/login");
        });
        }else{
            alert("invalid credientials");
        }   
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Your Name" />
            <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
            <input type="password" name="reEnterPassword" value={newUser.reEnterPassword} onChange={handleChange} placeholder="Re-Enter Password" />
            <div className="button" onClick={handleClick}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    );
}
