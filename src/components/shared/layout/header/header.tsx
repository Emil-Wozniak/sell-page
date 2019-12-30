import React from "react";
import "./header.css";
import {Hoverable, Logo, Example, HoverableType} from "./header.components";

type HeaderProps = {
    routes: Array<HoverableType>;
};

const Header = ({routes}: HeaderProps) =>
    <header className="bg-gray-200 font-sans leading-normal tracking-normal">
        <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
            <div className="container mx-auto flex justify-between">
                <Logo/>
                <ul className="flex">
                    {routes?.map(({title, background, route, amount}: HoverableType) =>
                        <Hoverable title={title} background={background} route={route} amount={amount}>
                            <Example amount={amount}/>
                        </Hoverable>
                    )}
                </ul>
            </div>
        </nav>
    </header>;

export default Header;

