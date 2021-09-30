import React from 'react';
import "../Sidebar.sass"
import {Link} from "react-router-dom";
import "./SidebarItem.sass"

const SidebarItem = ({text, link, icon, alt}) => {
    return (
        <li className="sidebar-nav-link">
            <Link to={link} className="sidebar-nav-link">
                <div className="sidebar-icon-wrapper">
                    <img src={icon} className="sidebar-icon"
                         alt={alt}/>
                </div>
                {text}
            </Link>
        </li>
    );
};

export default SidebarItem;