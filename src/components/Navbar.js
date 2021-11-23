// import React, { Component } from "react";
// import logo from "../logo.svg";

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar ">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="text-white" />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="text-white" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div className=" bg-green-800 ">
//         <nav className=" container mx-auto py-6 flex items-center justify-between ">
//           <div className=" flex items-center">
//             <img src={logo} className=" w-20" alt="logo" />
//             <h5 className="font-bold text-white text-2xl">Learn React</h5>
//           </div>
//           <li className="list-none w-1/5 flex justify-between">
//             <a
//               href="#"
//               className="text-bold text-lg uppercase text-gray-100 hover:text-gray-400"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="text-bold text-lg uppercase text-gray-100 hover:text-gray-400"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="text-bold text-lg uppercase text-gray-100 hover:text-gray-400"
//             >
//               Contact
//             </a>
//             <a
//               href="#"
//               className="text-bold text-lg uppercase text-gray-100 hover:text-gray-400"
//             >
//               Projects
//             </a>
//           </li>
//         </nav>
//       </div>
//     );
//   }
// }
