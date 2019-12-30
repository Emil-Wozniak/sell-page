import React from "react";
import "./home.styles.scss";
import { DirectoryMenu } from "../directory-menu/directory-menu";

type HomeProps = {};

const Home = (props: HomeProps) =>
    <div className="homepage">
        <DirectoryMenu />
    </div>;

export default Home;