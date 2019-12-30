import React from "react";
import "./menu-item.scss";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {handlePush} from "../../../shared/utils/route-utils";

interface IItemMenu extends RouteComponentProps{
    title: string;
    imageUrl: string
    size?: string;
    linkUrl: string;
}

const MenuItem = ({title, imageUrl, size, match, linkUrl, history}: IItemMenu) =>
    <div
        className={`${size !== undefined ? size : ''} menu-item`}
        onClick={handlePush({history,match, linkUrl})}>
        <div
            className="background-image"
            style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>;

export default withRouter(MenuItem);