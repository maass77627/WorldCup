import {NavLink} from "react-router-dom";
import { FaTrophy } from "react-icons/fa";
function Nav() {



    return (
        <nav className="nav">
           
            <h3>  <FaTrophy /> World Cup Tracker 2026</h3>
            {/* <div classname="links"> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Teams</NavLink>
            <NavLink to="/">Players</NavLink>
            <NavLink to="/">Matches</NavLink>
            {/* </div> */}
        </nav>
    )
}

export default Nav