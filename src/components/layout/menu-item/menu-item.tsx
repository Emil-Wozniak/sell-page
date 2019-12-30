import React from "react";
import "./menu-item.scss";

type DirectoryMenu = {
    title: string;
    imageUrl: string
    size?: string;
}

const MenuItem = ({title, imageUrl, size}: DirectoryMenu) =>
    <div
        className={`${size !== undefined ? size : ''} menu-item`}>
        <div
            className="background-image"
            style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>;

export default MenuItem;