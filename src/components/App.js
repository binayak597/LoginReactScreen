import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Success from "./Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(){
    const [user, setUser] = useState({});
    return (
        <div className="app">
        <Router>
            <Switch>
                <Route exact path="/">{user && user._id ? <Success setUser={setUser} /> : <Login setUser={setUser} />}</Route>
                <Route path="/login"><Login setUser={setUser} /></Route>
                <Route path="/register"><Register /></Route>
            </Switch>
            </Router>
        </div>
    );
}