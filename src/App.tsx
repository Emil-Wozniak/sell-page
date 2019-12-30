import React from "react";
import "./App.css";
import Header from "./components/shared/layout/header/header";
import Footer from "./components/shared/layout/footer/footer";
import {APP_CONTAINER} from "./components/shared/layout/styles/style-constants";
import Home from "./components/layout/home/Home";

const App: React.FC = () => {
    return (
        <div className={APP_CONTAINER}>
            <Header/>
            <Home/>
            <Footer title={"Here you can put your footer info"}/>
        </div>)
};

export default App;

