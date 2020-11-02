import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home";

export default function MainRouter(props: any) {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    );
}