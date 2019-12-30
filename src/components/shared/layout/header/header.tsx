import React from "react";
import "./header.css";
import {Hoverable, Logo, Example} from "./header.components";

type HeaderProps = {};

const Header = (props: HeaderProps) =>
    <header className="bg-gray-200 font-sans leading-normal tracking-normal">
        <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
            <div className="container mx-auto flex justify-between">
                <Logo/>
                <ul className="flex">
                    <Hoverable title="User" background={"bg-blue-800"}>
                        <Example amount={2}/>
                    </Hoverable>
                    <Hoverable title="Buy" background={"bg-green-800"}>
                        <Example amount={4}/>
                    </Hoverable>
                </ul>
            </div>
        </nav>
    </header>;

export default Header;

