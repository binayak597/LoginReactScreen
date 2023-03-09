import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function Login({setUser}){
  const history = useHistory();
  const [logInUser, setLogInUser] = useState({
    email: "",
    password: ""
  });


  function handleChange(event){
    const {name, value} = event.target;
    setLogInUser((prevUser) =>{
      return{
        ...prevUser,
        [name]: value
      }
    })
  }

  function handleClick(){
    axios.post("http://localhost:8000/login", logInUser)
    .then(res => {
      alert(res.data.message);
      setUser(res.data.foundUser);
      history.push("/");
    });
  };

    return (
        <div className="login">
        <h1>Login</h1>
            <input type="email" name="email" value={logInUser.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={logInUser.password} onChange={handleChange} placeholder="Password" />
            <div className="button" onClick={handleClick}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        
    );
}