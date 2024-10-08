import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SidebarContext } from "../context/drawerContext";
import { useContext } from "react";
import styles from "./navbar.module.css";

function Navbar() {
  const { isCollapsed, toggleSidebar } = useContext(SidebarContext);

  return (
    <div>
      <button onClick={toggleSidebar}>
        <MenuOpenIcon />
      </button>
    </div>
  );
}

export default Navbar;
