import React from "react";
import "./home.styles.scss";

type HomeProps = {};

type DirectoryMenu = {
    title: string;
}

const MenuItem = (props: DirectoryMenu) =>
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>;

const DirectoryMenu = (props: DirectoryMenu) =>
    <div className="directory-menu">
        <MenuItem title={props.title}/>
    </div>;

const Home = (props: HomeProps) => {
    return (
        <div className="homepage">
            <DirectoryMenu title="Hats"/>
            <DirectoryMenu title="Jackets"/>
            <DirectoryMenu title="MEN"/>
            <DirectoryMenu title="WOMAN"/>
        </div>
    );
};

export default Home;