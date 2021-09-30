import React from 'react';
import "./SidebarBottomItem.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const SidebarBottomItem = () => {
    return (
        <Link to="/faq" className="nav-bottom-button">
            <FontAwesomeIcon icon={faQuestionCircle} className="nav-fa-icon"/>
            <div id="bottom-text">
                Faq
            </div>
        </Link>
    );
};

export default SidebarBottomItem;