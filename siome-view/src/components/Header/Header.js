import React from 'react';
import "./Header.sass"
import {FaBars} from "react-icons/all";


const Header = ({handleToggleSidebar}) => {
    return (
        <div className="header-wrapper">
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
        </div>


    );
};

export default Header;