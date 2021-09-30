import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './SidebarButton.sass'

const SidebarButton = ({text, onClick}) => {
    return (
        <Button variant="secondary" className="nav-button" onClick={onClick}>
            {text}
        </Button>
    );
};

export default SidebarButton;