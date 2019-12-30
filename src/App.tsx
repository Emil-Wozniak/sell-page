import React from "react";
import "./App.css";
import Header from "./components/shared/layout/header/header";
import Footer from "./components/shared/layout/footer/footer";
import {
    APP_CONTAINER,
    BODY_CONTENT, FORM_LOGIN,
    SIGN_IN_INPUT,
    SIGN_IN_LABEL,
    PASS_INPUT, SIGN_IN_BTN
} from "./components/shared/layout/styles/style-constants";

const App: React.FC = () => {
    return (
        <div className={APP_CONTAINER}>
            <Header title="header title"/>
            <div className={APP_CONTAINER}>
                <div className={BODY_CONTENT}>
                    <form action="" className={FORM_LOGIN}>
                        <div className="px-4 pb-4">
                            <label htmlFor="email" className={SIGN_IN_LABEL}>EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                id=""
                                className={SIGN_IN_INPUT}
                                placeholder="example@example.com"/>
                        </div>
                        <div className="px-4 pb-4">
                            <label htmlFor="password" className={SIGN_IN_LABEL}>PASSWORD</label>
                            <input
                                type="password"
                                name="email"
                                id=""
                                className={PASS_INPUT}
                                placeholder="Enter your password"/>
                        </div>
                        <div>
                            <button
                                className={SIGN_IN_BTN}
                                type="button">Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer title={"Here you can put your footer info"}/>
        </div>)
};

export default App;

