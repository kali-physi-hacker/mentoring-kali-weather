import React, {useState} from 'react';

import "../styles/sidebar.css"

import profileIcon from '../assets/images/container-bg.jpg';


function Sidebar () {
    const [opened, setOpened] = useState(false);

    return (
        <div className={`sidebar ${opened ? "sidebar-opened" : ""}`}>
            <i onClick={()=> setOpened(!opened)} className="sidebar-toggler fa fa-bars fa-2x fa-2x"></i>
            <div className={"profile-info"}>
                <img className={"profileImg"} src={profileIcon} alt=""/>
                <p className="name">Desmond Brown</p>
                <p className="email">browndesmond30@yahoo.com</p>
            </div>
            <div className={"menu-actions"}>

            </div>
        </div>
    )
}


export default Sidebar;