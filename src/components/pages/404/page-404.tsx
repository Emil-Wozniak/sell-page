import * as React from 'react';
import "./page404.scss";
import {withRouter} from "react-router-dom";

type Page404Props = {location: any};

function pageName(location: any) {
    return location.pathname.replace("/", "").toUpperCase();
}

const Page404 = ({location}: Page404Props) => (
        <div className="default-page bg-orange-200 h-screen ">
            <div className="text-center mt-20">
                <div className="icon"/>
                <h1 className="text-red-900 text-4xl">
                    Oops!
                </h1>
                <h1 className="text-red-500 text-2xl">
                    PAGE {pageName(location)} NOT FOUND
                </h1>
            </div>
        </div>);

export default withRouter(Page404);