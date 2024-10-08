import React from "react";
import { Sidebar, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import styles from "./sidebar.module.css";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ContactsIcon from "@mui/icons-material/Contacts";
import InsightsIcon from "@mui/icons-material/Insights";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { SidebarContext } from "../context/drawerContext";
import { useContext } from "react";

const SidebarData = [
  {
    icon: <EqualizerIcon />,
    text: "Dashboard",
  },
  {
    icon: <ContactsIcon />,
    text: "Contacts",
    list: [
      {
        icon: <InsightsIcon />,
        text: "Statistics",
      },
      {
        icon: <TextSnippetOutlinedIcon />,
        text: "List by Status",
        list: [
          { text: "All" },
          { text: "Active" },
          { text: "Pending" },
          { text: "Terminated" },
          { text: "Archived" },
        ],
      },
    ],
  },
  {
    icon: <LocalAtmOutlinedIcon />,
    text: "Schedule",
  },
  {
    icon: <ComputerOutlinedIcon />,
    text: "Tasks",
  },
  {
    icon: <HandshakeOutlinedIcon />,
    text: "Partners",
  },
  {
    icon: <WorkOutlineOutlinedIcon />,
    text: "Cases",
  },
];

const renderMenuItems = (items) => {
  return items.map((item, index) => {
    if (item.list) {
      return (
        <Submenu key={index} title={item.text} icon={item.icon}>
          <div className={styles.indent}>{renderMenuItems(item.list)}</div>
        </Submenu>
      );
    }
    return (
      <MenuItem key={index} icon={item.icon}>
        {item.text}
      </MenuItem>
    );
  });
};

const Drawer = () => {
  const { isCollapsed, toggleSidebar } = useContext(SidebarContext);
  console.log(isCollapsed);
  return (
    <div
      className={`${styles.sidebarContainer} ${
        isCollapsed ? styles.collapsed : styles.expanded
      }`}
    >
      {" "}
      <Sidebar
        width={"270px"}
        className={styles.sidebar}
        themeColor="#433d61"
        textColor="#ffff"
        showProfile={false}
        isCollapse={isCollapsed ? true : false}
      >
        <div className={styles.profileImage}>
          <Logo img="https://i.postimg.cc/cJKHTy9N/IMG-20231022-WA0043.jg"></Logo>
        </div>
        <div className={styles.menuWrapper}>
          {renderMenuItems(SidebarData, toggleSidebar)}
        </div>
      </Sidebar>
    </div>
  );
};

export default Drawer;
