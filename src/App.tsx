import React from "react";
import "./App.css";
import Header from "./components/shared/layout/header/header";
import Footer from "./components/shared/layout/footer/footer";
import {HoverableType} from "./components/shared/layout/header/header.components";
import {Routes} from "./routes";

const routes: Array<HoverableType> = [
    {title: "home", route: "/", background: "bg-white", amount: 0},
    {title: "user", route: "/user", background: "bg-blue-800", amount: 4},
    {title: "buy", route: "/buy", background: "bg-green-800", amount: 2},
    {title: "hats", route: "/hats", background: "bg-blue-800", amount: 2},
];
const App: React.FC = () => {
    return (
        <>
            <Header routes={routes}/>
            <Routes/>
            <Footer title={"Here you can put your footer info"}/>
        </>
    )
};

export default App;

