import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./register";
import Login from "./login";

export default () =>(
        <Switch>
        <Route exact path="/login" render = {props => <Login {...props} />} />
        <Route exact path="/register" render ={props => <Register {...props} />} />
        </Switch>
);