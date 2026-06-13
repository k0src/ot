import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "@components";
import { SidebarProvider } from "@contexts";
import styles from "./AppLayout.module.css";

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className={styles.layoutContainer}>
        <Sidebar />
        <div className={styles.contentAreaContainer}>
          <Header />
          <main className={styles.contentArea}>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default memo(AppLayout);
