import React from 'react';
import "./Sidebar.sass"
import {ProSidebar} from "react-pro-sidebar";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import play_icon from "../../assets/icons/play.png";
import matches_icon from "../../assets/icons/matches.png";
import computer_icon from "../../assets/icons/computer.png";
import invite_icon from "../../assets/icons/invite.png";
import matchmaking_icon from "../../assets/icons/matchmaking.png";


import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarButton from "./SidebarButton/SidebarButton";
import SidebarBottomItem from "./SidebarBottomItem/SidebarBottomItem";
import {useKeycloak} from "@react-keycloak/web";

const Sidebar = ({toggled, handleToggleSidebar}) => {

    const {keycloak} = useKeycloak()

    return (
        <ProSidebar className="sidebar-wrapper"
                    toggled={toggled}
                    breakPoint="md"
                    onToggle={handleToggleSidebar}
        >
            <Link to="/">
                <img src={logo} className="nav-logo-image" alt="Logo"/>
            </Link>

            <section className="nav-links">
                <SidebarItem text="Play" link="/play" icon={play_icon} alt="Play icon"/>
                <SidebarItem text="Matches" link="/matches" icon={matches_icon} alt="Matches icon"/>
                <SidebarItem text="Computer" link="/computer" icon={computer_icon} alt="Computer icon"/>
                <SidebarItem text="Invite" link="/invite" icon={invite_icon} alt="Invite icon"/>
                <SidebarItem text="Matchmaking" link="/matchmaking" icon={matchmaking_icon} alt="Matchmaking icon"/>
            </section>

            <section className="nav-buttons">
                <SidebarButton text="Log Out" onClick={() => keycloak.logout()}/>
            </section>

            <section className="nav-bottom">
                <SidebarBottomItem/>
            </section>

        </ProSidebar>
    );
};

export default Sidebar;