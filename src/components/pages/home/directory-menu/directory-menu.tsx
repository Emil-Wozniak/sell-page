import * as React from 'react';
import "./directory-menu.scss";
import MenuItem from "../menu-item/menu-item";
import {sections, Sections} from "../data";
import {withRouter, RouteComponentProps} from "react-router-dom";

interface DirectoryMenuProps extends RouteComponentProps{};
type DirectoryMenuState = {
    sections: Sections;
};

class DirectoryMenu extends React.Component<DirectoryMenuProps, DirectoryMenuState> {
    constructor(props: DirectoryMenuProps) {
        super(props);
        this.state = {sections}
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, title,...others}) =>
                    <MenuItem
                        key={`${title}-${id}`}
                        title={title.toUpperCase()}
                        {...others}/>)
                })}
            </div>
        );
    };
}

export default withRouter(DirectoryMenu);