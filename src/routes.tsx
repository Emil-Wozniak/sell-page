import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Page404 from "./components/pages/404/page-404";

type RoutesProps = {};

export const Routes = (props: RoutesProps) =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={Page404}/>
    </Switch>;
