import React, {useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import './Layout.sass'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {

    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className="app">
            <Sidebar
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className="wrapper">
                <Header
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
                {props.children}
                <div className="footer-wrapper">
                    <Footer/>
                </div>
            </div>

        </div>
    );
};

export default Layout;