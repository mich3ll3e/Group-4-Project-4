import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData} from "./sidebarData";

class Sidebar  extends Component {
    render() { 
        return ( 
          
            <div className="sidebar">
                <div>
                    <h2 style={{textAlign:"center"}}>Menu</h2>
                </div>
                <ul>
                <li>
                <Link className ="link-calor" to="/dashboard">Home</Link>
                </li>
                <li>
                <Link className ="link-calor" to="/dashboard/create">Create Todo</Link>
                </li>
                <li>
                Family Members
                </li>
                <li>
                Events
                </li>
                <li>
                    Setiings
                </li>
                </ul>
             </div>

         );
    }
}
 
export default Sidebar;