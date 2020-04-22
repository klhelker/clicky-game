import React from "react";
import "./style.css";

const NavBar = () => (
 <nav className="navbar navbar-sticky">
     <div className="navbar--logo-holder">
         <h1>Clicky Game</h1>
         </div>
    <ul className="navbar--link">
        <li className="navbar--link-item">click image to begin</li>
        <li className="navbar--link-item">score:</li>
        
    </ul>
 </nav>
)


export default NavBar
