import * as React from "react";
import Drawer from "../sidebar/Drawer";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";
import { SidebarProvider } from "../context/drawerContext";
import RightPanel from "../rightPanel/rightPanel";

export default function Home() {
  return (
    <SidebarProvider>
      <div className={styles.home}>
        <Drawer />
        <div className={styles.mainContent}>
          <Navbar />
          <RightPanel />
        </div>
      </div>
    </SidebarProvider>
  );
}
