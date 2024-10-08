import * as React from "react";
import Drawer from "../sidebar/Drawer";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";
import { SidebarProvider } from "../context/drawerContext";

export default function Home() {
  return (
    <SidebarProvider>
      <div className={styles.home}>
        <Drawer />
        <Navbar />
      </div>
    </SidebarProvider>
  );
}
