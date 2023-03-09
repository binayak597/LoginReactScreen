import React from "react";
import { useHistory } from "react-router-dom";


export default function Success({setUser}){
    const history = useHistory();
    function handleClick(){
        setUser({});
        history.push("/");
    }
    return (
        <div className="success">
            <h1 className="heading-text">Hello</h1>
            <p>Welcome to Homepage</p>
            <div className="button" onClick={handleClick}>Logout</div>      
        </div>
    );
}